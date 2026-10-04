import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <AlertTriangle className="mb-6 h-16 w-16 text-primary" />
      <h1 className="font-heading text-4xl uppercase md:text-6xl">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-8 rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
}