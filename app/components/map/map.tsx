export function Map() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7f9c9b6e0e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1611816751234!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
            ></iframe>
        </div>
    );
};