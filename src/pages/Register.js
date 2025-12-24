import "./Register.css";

export default function Register() {
    return (
        <section className="page-section register-page">
            <h1>Register for HACK KRMU 5.0</h1>

            <p className="register-sub">
                Fill out the form below to secure your spot 🚀
            </p>

            <div className="form-wrapper">
                <iframe
                    src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                    width="100%"
                    height="900"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Hack KRMU Registration Form"
                >
                    Loading…
                </iframe>
            </div>
        </section>
    );
}
