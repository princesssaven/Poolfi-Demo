"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export interface FileWithPreview extends File {
  preview: string;
}

interface FileUploadDropzoneProps {
  onFilesChange: (files: FileWithPreview[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
  accept?: string;
}

function CameraIcon() {
  return (
    <svg width="40" height="40" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M43 38a3 3 0 01-3 3H8a3 3 0 01-3-3V18a3 3 0 013-3h6l3-4h14l3 4h6a3 3 0 013 3z" />
      <circle cx="24" cy="27" r="6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function FileUploadDropzone({
  onFilesChange,
  maxFiles = 5,
  maxSizeMB = 5,
  accept = "image/jpeg, image/png, application/pdf"
}: FileUploadDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean up object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      files.forEach(file => {
        if (file.preview) URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);

  const processFiles = useCallback((newFiles: File[]) => {
    setError(null);
    
    // Check max files limit
    if (files.length + newFiles.length > maxFiles) {
      setError(`You can only upload up to ${maxFiles} files.`);
      return;
    }

    const validFiles: FileWithPreview[] = [];
    
    for (const file of newFiles) {
      // Validate file size
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`File ${file.name} is too large. Max size is ${maxSizeMB}MB.`);
        return;
      }
      
      // Validate file type
      if (!accept.includes(file.type)) {
        setError(`File ${file.name} is not supported. Use JPG, PNG, or PDF.`);
        return;
      }
      
      // Add preview
      const preview = URL.createObjectURL(file);
      Object.assign(file, { preview });
      validFiles.push(file as FileWithPreview);
    }
    
    const updatedFiles = [...files, ...validFiles];
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  }, [files, maxFiles, maxSizeMB, accept, onFilesChange]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  }, [processFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(Array.from(e.target.files));
    }
    // Reset input value so the same file can be selected again if removed
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [processFiles]);

  const removeFile = useCallback((indexToRemove: number) => {
    const updatedFiles = files.filter((_, idx) => idx !== indexToRemove);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  }, [files, onFilesChange]);

  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div 
        className={`flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed bg-bg-page px-6 py-10 transition-colors cursor-pointer
          ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept={accept} 
          multiple 
          onChange={handleFileInput} 
        />
        <CameraIcon />
        <div className="text-center">
          <p className="text-[17px] font-bold tracking-tight text-text-dark font-heading">
            Upload photos or documents
          </p>
          <p className="mt-1 text-[13px] text-text-muted font-card">
            JPG, PNG, PDF. Max {maxSizeMB}MB per file
          </p>
        </div>
      </div>
      
      {/* Error message */}
      {error && (
        <p className="text-sm font-medium text-warning font-card">{error}</p>
      )}

      {/* Previews */}
      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {files.map((file, idx) => (
            <div key={`${file.name}-${idx}`} className="relative group aspect-square rounded-lg border border-border bg-white overflow-hidden shadow-sm">
              {file.type.includes("image") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={file.preview} alt={file.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-3 text-text-muted bg-gray-50">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] font-bold truncate w-full text-center">{file.name}</span>
                </div>
              )}
              
              {/* Remove button overlay */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(idx);
                }}
                className="absolute top-1.5 right-1.5 p-1 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                aria-label="Remove file"
              >
                <CloseIcon />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
