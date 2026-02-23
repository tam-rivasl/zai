"use client"

import React, { useState } from 'react';
import { Sparkles, Save, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { generateComfortingVerse } from '@/ai/flows/generate-comforting-verse';
import { useToast } from '@/hooks/use-toast';

interface VerseGeneratorProps {
  onSaveVerse: (verse: string) => void;
}

export function VerseGenerator({ onSaveVerse }: VerseGeneratorProps) {
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedVerse, setGeneratedVerse] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setLoading(true);
    try {
      const result = await generateComfortingVerse({ moodOrKeywords: mood });
      setGeneratedVerse(result.verse);
    } catch (error) {
      toast({
        title: "Error",
        description: "No pudimos conectar con las musas en este momento.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 w-full max-w-2xl mx-auto px-6 pb-24">
      <div className="glass-panel p-8 rounded-2xl space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold flex items-center justify-center gap-2 text-primary">
            <Sparkles size={20} />
            Generador de Aliento
          </h2>
          <p className="text-sm text-muted-foreground italic">
            Describe tu sentir en pocas palabras y deja que los versos te encuentren.
          </p>
        </div>

        <form onSubmit={handleGenerate} className="flex gap-2">
          <Input
            placeholder="Ej: melancolía, esperanza, noche estrellada..."
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:ring-primary/50"
          />
          <Button 
            disabled={loading || !mood.trim()} 
            type="submit"
            className="bg-secondary hover:bg-secondary/80 text-white"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
          </Button>
        </form>

        {generatedVerse && (
          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-lg italic leading-relaxed text-center mb-6">
              "{generatedVerse}"
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onSaveVerse(generatedVerse);
                  setGeneratedVerse(null);
                  setMood('');
                }}
                className="gap-2 border-primary/30 hover:bg-primary/10"
              >
                <Save size={14} />
                Guardar en mi diario
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
