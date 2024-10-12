import { Navbar } from '@/components/Navbar'

function Features() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
    <Navbar />
    <main className="container mx-auto px-8 py-20 pt-40">
      <h1 className="text-5xl font-bold mb-14 text-center text-white">
        Features
      </h1>
      <ul className="grid gap-8 max-w-4xl mx-auto text-center text-2xl">
        
        <li>AI-powered content generation for Twitter, Instagram, and LinkedIn </li>
        <li>User authentication and account management with Clerk </li>
        <li>Points-based system for content generation </li>
        <li>Content history and regeneration </li>
        <li>Responsive design for desktop and mobile devices </li>
        <li>Preview functionality for generated content </li>
        <li>Integration with Googles Generative AI (Gemini) </li>
        
      </ul>
    </main>
  </div>
  )
}

export default Features