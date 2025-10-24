import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, project, message }: ContactFormData = await req.json();

    // Server-side validation
    if (!name || name.length < 2 || name.length > 100) {
      return new Response(
        JSON.stringify({ error: 'Name must be between 2 and 100 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!message || message.length < 10 || message.length > 2000) {
      return new Response(
        JSON.stringify({ error: 'Message must be between 10 and 2000 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get EmailJS credentials from environment variables
    const serviceId = Deno.env.get('EMAILJS_SERVICE_ID');
    const templateId = Deno.env.get('EMAILJS_TEMPLATE_ID');
    const publicKey = Deno.env.get('EMAILJS_PUBLIC_KEY');

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS credentials in environment variables');
      return new Response(
        JSON.stringify({ error: 'Email service not configured. Please contact administrator.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send email using EmailJS API
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          project_type: project,
          message: message,
          to_email: 'amalodhbhavielectricals@gmail.com',
        },
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('EmailJS API error:', errorText);
      throw new Error('Failed to send email');
    }

    console.log('Email sent successfully for:', email);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
