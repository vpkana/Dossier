import { useRef, useState  } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import NextChapter from "../../components/NextChapter/NextChapter";
const public_key = 'FQtvobISPZU-pxQoR';
const service_id = 'service_wjah12b';
const template_id = 'template_w0va6mc';
const mail_id = 'vprabhathak04@gmail.com';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
    const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;
    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const message = form.message.value.trim();

    // Basic client-side validation
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

      if (email === mail_id) {
      toast.error("Sender's email cannot be the same as the recipient's email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await emailjs
      .sendForm(
        service_id,    
        template_id,   
        formRef.current,
        public_key    
      );
      toast.success("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative text-white py-20 px-6 md:px-16 overflow-hidden theme-transition"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      <Toaster 
        position="top-right" 
        containerStyle={{
          top: 80,
          zIndex: 99999
        }}
        toastOptions={{
          duration: 4000,
        }}
      />

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind, want to discuss software architecture, or just say hello? Reach out!
          </p>
        </div>

        {/* Contact Form and Details */}
        <div className="max-w-3xl mx-auto backdrop-blur-sm border rounded-2xl p-8 shadow-2xl mb-16" style={{
          background: 'var(--bg-secondary)',
          borderColor: 'var(--border-secondary)'
        }}>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 focus:border-blue-400"
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderColor: 'var(--border-secondary)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 focus:border-blue-400"
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderColor: 'var(--border-secondary)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 focus:border-blue-400 resize-none"
                style={{
                  background: 'var(--bg-tertiary)',
                  borderColor: 'var(--border-secondary)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer text-white disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="flex flex-col items-center p-6 backdrop-blur-sm border rounded-xl" style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-secondary)'
          }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--bg-tertiary)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Email</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{mail_id}</p>
          </div>
          
          <div className="flex flex-col items-center p-6 backdrop-blur-sm border rounded-xl" style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-secondary)'
          }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--bg-tertiary)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Location</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Bengaluru</p>
          </div>
          
          <div className="flex flex-col items-center p-6 backdrop-blur-sm border rounded-xl" style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-secondary)'
          }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--bg-tertiary)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Response Time</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Within 24 hours</p>
          </div>
        </div>

        {/* Return / Next Chapter in Dossier */}
        <div className="mt-8">
          <NextChapter
            prevPage={{
              title: "Mindset & Story",
              path: "/about"
            }}
            nextPage={{
              chapterNumber: "FILE 01 / 04",
              title: "Return to Overview & Projects",
              description: "You've toured all chapters of the portfolio! Return to the overview or review featured full-stack projects.",
              path: "/",
              badgeText: "DOSSIER COMPLETED"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
