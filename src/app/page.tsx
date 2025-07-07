import React from 'react';

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <section
        className="relative flex min-h-[500px] flex-col items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat p-6 text-center shadow-lg"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYZS-7mnqJuPdBPzLWOsQrO9WCmyili3fF_qon5OEomHQpd0pglUfPZ3lAJlkXmJ9-HLiYrwzoJDUKUzlKXk5SBFRhRktvDun2ydHkNQWwrGgO85jUibfFrSn5mzHAMRjhm3Uza6QIRcmZ_51ylYIa0trHuIIVtXCpq5PuEDtp16NIwh-M3wwmuU97dTxDSAgBL6rYxbYyR89qodlwPsW3kUzzVPS8EM13HhqwdTi7jVnwD4Nj9yLgaGCKframRLTE-oZh7gYhdbI")',
        }}
        data-ai-hint="woman meditating"
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
            Desbloquea Tu Potencial Creativo y Emprendedor
          </h1>
          <p className="text-white text-lg md:text-xl font-light">
            Encuentra la claridad, el enfoque y la motivación para convertir
            tus ideas brillantes en proyectos exitosos.
          </p>
        </div>
        <button className="mt-8 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#47eab4] text-text-primary text-base font-bold shadow-md hover:bg-opacity-90 transition-colors">
          <span className="truncate">Comienza tu Transformación Ahora</span>
        </button>
      </section>
      <section className="grid md:grid-cols-2 gap-16 items-center py-20">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-4">
            Your Guide to Creative Mastery
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            At ZenFlow Coaching, we understand the unique challenges of
            entrepreneurs and creatives. We offer personalized tools and
            strategies to overcome blocks, optimize your workflow, and cultivate
            an unstoppable mindset. My mission is to help you channel your
            creative energy into tangible and sustainable results.
          </p>
        </div>
        <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpdDatpYGsWgNkPgC4iNkgQnxz9cHoHSqMFn1RFDrarr5ImXh1jz3W5sp3UyqQeuUd0w1mojnBiwsHpJr5B7RK5qYy7Nt_GbTXrudRn3bKxxl2iWwpkzk_p6gQN4DkjP5VmP9aHCyyMQKggAD178fnM4qOmMRN-cBoCcAUTAuUvI9g_qR7QRy_6g1LEGEVfYzG27AhrJ4YkxSTHUWsP_azFOtgMkaDhcw1IGob1WiinOrJuS1wh_VtYDhLgRsI2Gs-GqHkuEVaAA0")',
            }}
            data-ai-hint="person working"
          ></div>
        </div>
      </section>
      <section className="py-20 bg-[var(--mint-green)] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary text-center mb-12">
            Services Designed to Boost Your Project
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center">
              <div className="bg-[#47eab4] p-3 rounded-full mb-4">
                <svg
                  fill="#1a202c"
                  height="32px"
                  viewBox="0 0 256 256"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Strategic Clarity
              </h3>
              <p className="text-text-secondary">
                Individual sessions to define your goals, identify obstacles,
                and outline a clear and concise action plan.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center">
              <div className="bg-[#47eab4] p-3 rounded-full mb-4">
                <svg
                  fill="#1a202c"
                  height="32px"
                  viewBox="0 0 256 256"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Creative Productivity
              </h3>
              <p className="text-text-secondary">
                Learn techniques to manage your time, avoid distractions, and
                maintain a constant flow of inspiration and execution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center">
              <div className="bg-[#47eab4] p-3 rounded-full mb-4">
                <svg
                  fill="#1a202c"
                  height="32px"
                  viewBox="0 0 256 256"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Unstoppable Mindset
              </h3>
              <p className="text-text-secondary">
                Develop resilience, overcome the fear of failure, and cultivate
                solid self-confidence to face any challenge.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary text-center mb-12">
          What Our Clients Have Achieved
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="bg-cover bg-center flex flex-col justify-end rounded-2xl p-8 min-h-[400px] shadow-lg"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoSoBOUl0hEnkx0qq0YTy1lJD0YLdrld_3DvyuNLmXgQ-To-W5CBOknANe-xhEsSogqJ7L-teUtUU3S89cN_C39Z0gULK_Ovf9JMKPif3Fsv3-bRSmEpZ6xz-d_67hLBeftQzLcYa_RcyPvwYCqdRobxB7s-BuSzrgSPvWeJPab8eZFJpZvxj29v-bKMmZiAGYgNBm5K27Ac1TZobSS2cXNggjfiHgIAHnCRULIb_Vo9fi32ygu_lUS5MJceh4ccbpZXGXtv-5YXw")',
            }}
            data-ai-hint="graphic designer"
          >
            <blockquote className="text-white">
              <p className="text-2xl font-bold mb-2">
                "Thanks to ZenFlow, I finally launched my podcast. Their focus on
                creative productivity changed the way I work."
              </p>
              <footer className="text-base font-medium opacity-90">
                Laura P., Graphic Designer
              </footer>
            </blockquote>
          </div>
          <div
            className="bg-cover bg-center flex flex-col justify-end rounded-2xl p-8 min-h-[400px] shadow-lg"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDakQjm6WqnDo03LMlKzFbwlft05QMYuw9TNT44IvVAOz44UWfNE222PxrcunhKazbV7OOJHLGqCHJJZZSv6FjbK-xf5xOEteQsoHSCLD-vcMlnvSXIJ4PcgcT9HZFwgwUoG6quy2Aa2uxUFPeeWCDcMlqeZiIjlL1ef3NTYprEA6f6svHmK-Vk9nEcXMP3UBoVH1fZ6cC63kiDj5LNNKp1ElZ2XU-b2JstJWufsU7YZXp3oERC2UkRMv4Gnz447-OJwufLYNldu-o")',
            }}
            data-ai-hint="writer entrepreneur"
          >
            <blockquote className="text-white">
              <p className="text-2xl font-bold mb-2">
                "I overcame my writer's block and now have a constant flow of
                ideas. Highly recommended for any creative!"
              </p>
              <footer className="text-base font-medium opacity-90">
                Martín S., Writer and Entrepreneur
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[var(--pale-sky-blue)] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-2xl shadow-sm group" open>
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-text-primary">
                How does a coaching session work?
                <svg
                  className="w-6 h-6 transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </summary>
              <p className="mt-4 text-text-secondary">
                Our sessions are virtual, lasting 60 minutes. They focus on
                your specific goals and creating actionable strategies.
              </p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-sm group">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-text-primary">
                What type of entrepreneurs benefit the most?
                <svg
                  className="w-6 h-6 transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </summary>
              <p className="mt-4 text-text-secondary">
                Designers, artists, writers, consultants, freelancers, and any
                creative professional looking to optimize their performance
                and well-being.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Schedule a free introductory session and discover how ZenFlow can
            transform your vision.
          </p>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-input w-full rounded-lg border-gray-300 bg-gray-50 focus:border-[#47eab4] focus:ring-[#47eab4] p-4 text-base"
                  id="name"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input w-full rounded-lg border-gray-300 bg-gray-50 focus:border-[#47eab4] focus:ring-[#47eab4] p-4 text-base"
                  id="email"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-textarea w-full rounded-lg border-gray-300 bg-gray-50 focus:border-[#47eab4] focus:ring-[#47eab4] p-4 text-base"
                id="message"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full md:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#47eab4] text-text-primary text-base font-bold shadow-md hover:bg-opacity-90 transition-colors mx-auto"
              type="submit"
            >
              <span className="truncate">Send Inquiry</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
