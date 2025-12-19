import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const portfolioItems = [
    {
      id: 1,
      title: 'Темная романтика',
      category: 'Авангардная коллекция',
      image: 'https://cdn.poehali.dev/projects/ed1e2672-d86c-4ae9-a3d7-4a624c29a522/files/06338bec-504c-48ea-9756-c76aff445d96.jpg',
    },
    {
      id: 2,
      title: 'Театральный эпатаж',
      category: 'Подиумная драма',
      image: 'https://cdn.poehali.dev/projects/ed1e2672-d86c-4ae9-a3d7-4a624c29a522/files/8d50e6e4-75c4-4478-b99e-b77a8683a535.jpg',
    },
    {
      id: 3,
      title: 'Готическая элегантность',
      category: 'Мрачная роскошь',
      image: 'https://cdn.poehali.dev/projects/ed1e2672-d86c-4ae9-a3d7-4a624c29a522/files/c307ddb8-73d2-4d5d-8aec-08a4d3d032d8.jpg',
    },
    {
      id: 4,
      title: 'Классический силуэт',
      category: 'Базовая коллекция',
      image: 'https://cdn.poehali.dev/projects/ed1e2672-d86c-4ae9-a3d7-4a624c29a522/files/816f9797-8c64-4b98-bd2f-84f5fd1424f8.jpg',
    },
    {
      id: 5,
      title: 'Скульптурные формы',
      category: 'Экспериментальная линия',
      image: 'https://cdn.poehali.dev/projects/ed1e2672-d86c-4ae9-a3d7-4a624c29a522/files/e1767646-b78c-48d7-8367-8915bdd4d277.jpg',
    },
    {
      id: 6,
      title: 'Процесс творения',
      category: 'За кулисами',
      image: 'https://cdn.poehali.dev/projects/ed1e2672-d86c-4ae9-a3d7-4a624c29a522/files/d7dcc839-8290-499d-9b89-71785174284b.jpg',
    },
  ];

  const collections = [
    { name: 'Темная романтика', year: '2024', pieces: 15 },
    { name: 'Театральный авангард', year: '2024', pieces: 12 },
    { name: 'Готическая роскошь', year: '2023', pieces: 10 },
    { name: 'Мрачная элегантность', year: '2023', pieces: 8 },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-8 right-8 z-50 flex flex-col gap-4">
        <div className="bg-background/90 backdrop-blur-md border-2 border-primary/30 p-6">
          <h1 className="text-2xl font-bold tracking-wider bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent mb-6 [writing-mode:vertical-rl] rotate-180">
            MONTIKO
          </h1>
          <div className="flex flex-col gap-6 items-end">
            {['home', 'portfolio', 'about', 'collections', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-xs tracking-[0.3em] uppercase transition-all font-bold hover:text-primary rotate-0 hover:rotate-6 ${
                  activeSection === section ? 'text-primary scale-125' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' ? '●' : 
                 section === 'portfolio' ? '■' :
                 section === 'about' ? '▲' :
                 section === 'collections' ? '◆' : '★'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-secondary/10 to-transparent" />
        
        <div className="container mx-auto px-8 grid grid-cols-12 gap-8 relative z-10">
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <div className="mb-8">
              <div className="w-2 h-32 bg-primary mb-6 animate-pulse-glow" />
            </div>
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-none animate-dramatic-entrance">
              <span className="block text-primary">MON</span>
              <span className="block text-secondary ml-16">TIKO</span>
            </h2>
            <div className="ml-32 space-y-4">
              <p className="text-2xl font-bold uppercase tracking-[0.4em] text-muted-foreground">
                Дизайн
              </p>
              <p className="text-4xl font-bold text-foreground">
                Костюма
              </p>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-5 flex items-end">
            <div className="w-full animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-4 border-primary pl-6">
                Смелость, драма и бескомпромиссный стиль. Мы создаём костюмы, которые провоцируют и восхищают.
              </p>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="px-10 py-7 text-lg font-bold bg-primary hover:bg-secondary border-2 border-primary hover:border-secondary transition-all duration-500 transform hover:scale-105 hover:-rotate-2"
              >
                Открыть портфолио →
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 flex gap-2 animate-fade-in">
          <div className="w-24 h-1 bg-primary" />
          <div className="w-16 h-1 bg-secondary" />
          <div className="w-8 h-1 bg-primary" />
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-24 relative">
        <div className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
        
        <div className="container mx-auto px-8">
          <div className="flex items-start mb-16">
            <div className="w-1/3">
              <h2 className="text-7xl font-bold text-primary mb-4 transform -rotate-3">Портфолио</h2>
              <div className="h-2 w-32 bg-secondary" />
            </div>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-12 gap-6">
              <div 
                className="col-span-12 md:col-span-7 group cursor-pointer animate-fade-in"
                onClick={() => setSelectedImage(portfolioItems[0].image)}
              >
                <div className="relative overflow-hidden bg-black aspect-[16/10] border-2 border-transparent group-hover:border-primary transition-all duration-500 transform group-hover:scale-[1.02] group-hover:rotate-1">
                  <img src={portfolioItems[0].image} alt={portfolioItems[0].title} className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-700" />
                  <div className="absolute top-6 left-6 bg-primary/90 px-4 py-2">
                    <p className="text-xs text-white uppercase tracking-[0.2em] font-bold">{portfolioItems[0].category}</p>
                  </div>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-3xl font-bold text-white">{portfolioItems[0].title}</h3>
                  </div>
                </div>
              </div>

              <div 
                className="col-span-12 md:col-span-5 group cursor-pointer animate-fade-in"
                style={{ animationDelay: '0.2s' }}
                onClick={() => setSelectedImage(portfolioItems[1].image)}
              >
                <div className="relative overflow-hidden bg-black aspect-[4/5] border-2 border-transparent group-hover:border-secondary transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                  <img src={portfolioItems[1].image} alt={portfolioItems[1].title} className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-xs text-white uppercase tracking-[0.2em] mb-2 font-bold">{portfolioItems[1].category}</p>
                      <h3 className="text-2xl font-bold text-white">{portfolioItems[1].title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div 
                className="col-span-12 md:col-span-5 group cursor-pointer animate-fade-in"
                style={{ animationDelay: '0.4s' }}
                onClick={() => setSelectedImage(portfolioItems[2].image)}
              >
                <div className="relative overflow-hidden bg-black aspect-[4/5] border-2 border-transparent group-hover:border-primary transition-all duration-500 transform group-hover:scale-[1.02]">
                  <img src={portfolioItems[2].image} alt={portfolioItems[2].title} className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/90 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs text-white uppercase tracking-[0.2em] mb-1 font-bold">{portfolioItems[2].category}</p>
                    <h3 className="text-xl font-bold text-white">{portfolioItems[2].title}</h3>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-6">
                {portfolioItems.slice(3, 6).map((item, index) => (
                  <div 
                    key={item.id}
                    className="group cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="relative overflow-hidden bg-black aspect-square border-2 border-transparent group-hover:border-secondary transition-all duration-500">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:brightness-75 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50">
                        <Icon name="ZoomIn" size={48} className="text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-24 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
        
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-7xl font-bold mb-6">
                  <span className="block text-secondary">О</span>
                  <span className="block text-primary ml-12">Бренде</span>
                </h2>
                <div className="flex gap-2 ml-12">
                  <div className="w-12 h-1 bg-secondary" />
                  <div className="w-12 h-1 bg-primary" />
                </div>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-2xl font-bold text-foreground border-l-4 border-primary pl-6">
                  MONTIKO — это манифест бескомпромиссного стиля.
                </p>
                <p className="text-lg pl-6">
                  Каждый костюм — это произведение искусства, рождённое на грани моды и провокации. 
                  Мы не боимся быть смелыми, драматичными, шокирующими.
                </p>
                <p className="text-lg pl-6">
                  Вдохновлённые духом Александра Маквина, мы создаём образы, которые останавливают взгляд 
                  и заставляют чувствовать.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 flex items-center">
              <div className="w-full space-y-8">
                <div className="bg-card border-l-8 border-primary p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <p className="text-6xl font-bold text-primary mb-2 animate-float">15+</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-bold">Лет бунта</p>
                </div>
                
                <div className="bg-card border-l-8 border-secondary p-8 ml-16 transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <p className="text-6xl font-bold text-secondary mb-2 animate-float" style={{ animationDelay: '0.5s' }}>500+</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-bold">Смелых образов</p>
                </div>
                
                <div className="bg-card border-l-8 border-primary p-8 ml-8 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <p className="text-6xl font-bold text-primary mb-2 animate-float" style={{ animationDelay: '1s' }}>20</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-bold">Провокаций</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="min-h-screen py-24 bg-card relative">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent" />
        
        <div className="container mx-auto px-8">
          <div className="flex justify-end mb-16">
            <div className="text-right">
              <h2 className="text-7xl font-bold text-primary mb-4 transform rotate-2">Коллекции</h2>
              <div className="h-2 w-32 bg-secondary ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`border-4 border-border p-12 hover:border-primary transition-all duration-500 bg-background transform hover:scale-105 ${index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <span className="text-xs text-secondary uppercase tracking-[0.3em] font-bold block mb-2">{collection.year}</span>
                    <h3 className="text-4xl font-bold text-primary mb-4">{collection.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="h-1 flex-1 bg-primary" />
                      <p className="text-2xl font-bold text-foreground">{collection.pieces}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Произведений искусства</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-24 flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-7xl font-bold mb-8">
                <span className="block text-primary">Кон</span>
                <span className="block text-secondary ml-8">такты</span>
              </h2>
              <div className="flex gap-2 mb-8">
                <div className="w-12 h-1 bg-primary" />
                <div className="w-12 h-1 bg-secondary" />
              </div>
              <p className="text-2xl text-foreground font-medium mb-12">
                Готовы к трансформации?
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 space-y-8">
              <div className="bg-card border-l-8 border-primary p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                <Icon name="Phone" size={32} className="text-primary mb-4" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Телефон</p>
                <p className="text-xl font-light">+7 (XXX) XXX-XX-XX</p>
              </div>

              <div className="bg-card border-l-8 border-secondary p-8 ml-16 transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                <Icon name="Mail" size={32} className="text-secondary mb-4" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Email</p>
                <p className="text-xl font-light">info@montiko.ru</p>
              </div>

              <div className="bg-card border-l-8 border-primary p-8 ml-8 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                <Icon name="MapPin" size={32} className="text-primary mb-4" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Адрес</p>
                <p className="text-xl font-light">Москва, ЦАО</p>
              </div>

              <div className="ml-16">
                <Button className="px-12 py-8 text-xl font-bold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 border-4 border-primary transform hover:scale-110 hover:-rotate-2">
                  Начать трансформацию →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t-4 border-primary/30 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-5xl font-bold mb-4">
                <span className="text-primary">MON</span>
                <span className="text-secondary">TIKO</span>
              </h3>
              <p className="text-xs text-muted-foreground italic">
                "Мода умирает молодой, стиль — никогда"
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] font-bold">
                Дизайн костюма
              </p>
              <p className="text-xs text-muted-foreground mt-2">2024</p>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden bg-black border-4 border-primary shadow-[0_0_50px_rgba(220,20,60,0.5)]">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Увеличенное изображение"
              className="w-full h-auto animate-dramatic-entrance"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
