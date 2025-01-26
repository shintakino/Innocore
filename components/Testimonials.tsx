const testimonials = [
  {
    content: "StreamLine has revolutionized our team's workflow. We're more productive than ever!",
    author: "Sarah Johnson",
    role: "Project Manager, TechCorp",
  },
  {
    content: "The analytics dashboard provides invaluable insights into our team's performance.",
    author: "Mike Chen",
    role: "CEO, InnovateCo",
  },
  {
    content: "Task management has never been easier. StreamLine is a game-changer for us.",
    author: "Emily Rodriguez",
    role: "Team Lead, DesignHub",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-12 sm:py-16 lg:py-20" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by teams worldwide</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-300 sm:mt-4">
            Hear what our customers have to say about StreamLine
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-gray-800 p-8 shadow-lg">
              <p className="text-gray-300">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="mt-6 flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

