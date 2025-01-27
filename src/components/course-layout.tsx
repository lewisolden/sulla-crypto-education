import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  CheckCircle, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// Import course content
import { courseContent } from '@/lib/course-content';

export const CourseLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('courseProgress');
      return saved ? JSON.parse(saved) : 0;
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? <X /> : <Menu />}
              </Button>
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Sulla</h1>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">
                Overall Progress: {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed md:static md:translate-x-0 z-50
          w-64 h-[calc(100vh-4rem)] bg-white border-r
          transition-transform duration-200 ease-in-out
        `}>
          <div className="h-full overflow-y-auto">
            <nav className="p-4 space-y-2">
              <ModuleList />
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

const ModuleList = () => {
  const [moduleProgress, setModuleProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('moduleProgress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('moduleProgress', JSON.stringify(moduleProgress));
  }, [moduleProgress]);

  return (
    <div className="space-y-2">
      {courseContent.modules.map((module, index) => (
        <ModuleListItem 
          key={module.id}
          module={module}
          progress={moduleProgress[module.id] || 0}
          index={index + 1}
        />
      ))}
    </div>
  );
};

const ModuleListItem = ({ module, progress, index }) => {
  return (
    <Card>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Module {index}</p>
            <CardTitle className="text-base">{module.title}</CardTitle>
          </div>
          {progress === 100 ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          )}
        </div>
        <Progress value={progress} className="mt-2" />
      </CardHeader>
    </Card>
  );
};

export default CourseLayout;
