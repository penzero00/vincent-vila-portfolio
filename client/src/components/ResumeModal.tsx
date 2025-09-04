import { useState, useRef } from 'react';
import { X, Download, Eye } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import ResumePreview from './ResumePreview';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: 'VilaVincentV_Resume',
    pageStyle: `
      @page {
        size: A4;
        margin: 0.2in;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
          font-size: 0.9em;
        }
        * {
          box-sizing: border-box;
        }
        .resume-container {
          max-height: 100vh;
          overflow: hidden;
        }
      }
    `,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <Eye className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold text-foreground">Resume Preview</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 flex items-center gap-2"
              data-testid="button-download-pdf"
            >
              <Download size={18} />
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              data-testid="button-close-modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Modal Content - Resume Preview */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ResumePreview ref={resumeRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}