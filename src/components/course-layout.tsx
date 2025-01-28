'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { BookOpen, CheckCircle, ChevronRight, Menu, X } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { courseContent } from '@/lib/course-content';

interface CourseLayoutProps {
  children: ReactNode;
}

export const CourseLayout = ({ children }: CourseLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [progress, setProgress] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Sulla</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <main className="flex-1 p-4">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseLayout;
