const FooterMap = () => {
  return (
    <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-white/10">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d677.1078199154656!2d80.01341492649786!3d16.256375097803684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a81e0d2761cdb%3A0x2fca70a5109fa58!2sAmalodbhavi%20electricals!5e0!3m2!1sen!2sin!4v1761329946398!5m2!1sen!2sin" 
        className="w-full h-full"
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default FooterMap;
