import { CourseModule } from '@/components/course/CourseModule'
import { courseContent } from '@/lib/course-content'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to Sulla</h1>
        <CourseModule 
          module={courseContent.modules[0]} 
          onComplete={() => console.log('Module completed!')} 
        />
      </div>
    </main>
  )
}
