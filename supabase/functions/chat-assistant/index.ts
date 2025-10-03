import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, action } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Handle lead submission action
    if (action === 'submit_lead') {
      const leadData = JSON.parse(messages[messages.length - 1].content);
      console.log('Lead submitted:', leadData);
      
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Lead information collected successfully' 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // System prompt for the AI assistant
    const systemPrompt = `You are a helpful AI assistant for Amalodbhavi Electricals, a professional electrical contracting company.

COMPANY INFORMATION:
- Services: Electrical installations, repairs, maintenance for residential, commercial, and industrial projects
- Project types: Residential apartments, individual houses, hospitals, schools, commercial buildings, industrial facilities, shopping malls, office complexes, hotels/resorts, warehouses
- Contact: +91 9989030669, Emergency: +91 8106900669
- Email: amalodhbhavielectricals@gmail.com
- Hours: Mon-Sat 8AM-6PM
- Brands partnered: Anchor, Bajaj, Crompton, Finolex, Goldmedal, Havells, Legrand, Polycab, Roma, RR Kabel, Schneider, V-Guard

YOUR ROLE:
1. Answer questions about electrical services, safety, installations, and company capabilities
2. When users ask about starting a project:
   - Ask for their name
   - Ask for their email
   - Ask for their phone number
   - Ask what type of project they have (residential, commercial, industrial, etc.)
   - Ask about project details and requirements
   - Once you have all information, respond with: "LEAD_COLLECTED:{name},{email},{phone},{project_type},{details}"

3. For out-of-scope questions (not related to electrical work, construction, or your services):
   - Politely explain you can only help with electrical service queries
   - Say: "For other inquiries, please CONTACT_TEAM to speak with our staff directly."
   - Use exactly the phrase "CONTACT_TEAM" so the system can detect it

GUIDELINES:
- Be professional, friendly, and helpful
- Keep responses concise (2-3 sentences)
- Focus on electrical safety and quality
- Don't make up information - only use what you know about the company
- If you don't know something specific, suggest contacting the team`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ 
          error: 'Rate limit exceeded. Please try again in a moment.' 
        }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      if (response.status === 402) {
        return new Response(JSON.stringify({ 
          error: 'Service temporarily unavailable. Please contact us directly.' 
        }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error('AI gateway error');
    }

    const data = await response.json();
    const generatedText = data.choices[0].message.content;

    return new Response(JSON.stringify({ message: generatedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
