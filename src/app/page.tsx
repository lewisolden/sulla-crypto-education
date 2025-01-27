import { CourseLayout } from '@/components/course-layout'

export default function Home() {
  return (
    <CourseLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Welcome to Sulla</h1>
        <p className="text-gray-600">Start your journey into cryptocurrency education.</p>
      </div>
    </CourseLayout>
  )
}
