import { CourseOverview } from '@/components/course/course-overview'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to Sulla</h1>
        <CourseOverview />
      </div>
    </main>
  )
}
