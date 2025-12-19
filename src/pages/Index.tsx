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
    { name: 'Темная романтика', year: '2024', pieces: 15, color: 'text-primary' },
    { name: 'Театральный авангард', year: '2024', pieces: 12, color: 'text-secondary' },
    { name: 'Готическая роскошь', year: '2023', pieces: 10, color: 'text-primary' },
    { name: 'Мрачная элегантность', year: '2023', pieces: 8, color: 'text-secondary' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b-2 border-primary/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MONTIKO</h1>
            <div className="hidden md:flex gap-8 items-center">
              {['home', 'portfolio', 'about', 'collections', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm tracking-[0.2em] uppercase transition-colors font-bold hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'portfolio' ? 'Портфолио' :
                   section === 'about' ? 'О бренде' :
                   section === 'collections' ? 'Коллекции' : 'Контакты'}
                </button>
              ))}
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,20,60,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-dramatic-entrance">
            <h2 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              MONTIKO
            </h2>
          </div>
          <p className="text-xl md:text-3xl text-foreground mb-8 animate-slide-up font-bold tracking-[0.3em] uppercase">
            Дизайн Костюма
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <div className="w-16 h-1 bg-primary animate-pulse-glow" />
            <div className="w-16 h-1 bg-secondary animate-pulse-glow" style={{ animationDelay: '0.3s' }} />
            <div className="w-16 h-1 bg-primary animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in leading-relaxed">
            Смелость, драма и бескомпромиссный стиль. Мы создаём костюмы, которые провоцируют и восхищают.
          </p>
          <Button 
            onClick={() => scrollToSection('portfolio')}
            className="mt-12 px-10 py-7 text-lg font-bold hover-scale bg-primary hover:bg-primary/90 border-2 border-primary hover:border-secondary transition-all duration-300"
          >
            Войти в мир MONTIKO
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-card relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center">Портфолио</h2>
          <div className="flex gap-2 justify-center mb-16">
            <div className="w-12 h-1 bg-primary" />
            <div className="w-12 h-1 bg-secondary" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden bg-black aspect-[3/4] border-2 border-transparent group-hover:border-primary transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-xs text-white uppercase tracking-[0.2em] mb-2 font-bold">
                        {item.category}
                      </p>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center">О бренде</h2>
            <div className="flex gap-2 justify-center mb-16">
              <div className="w-12 h-1 bg-secondary" />
              <div className="w-12 h-1 bg-primary" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-xl font-medium">
                  MONTIKO — это манифест бескомпромиссного стиля. Мы не следуем трендам, мы их создаём.
                </p>
                <p className="text-lg">
                  Каждый костюм — это произведение искусства, рождённое на грани моды и провокации. 
                  Мы не боимся быть смелыми, драматичными, шокирующими.
                </p>
                <p className="text-lg">
                  Вдохновлённые духом Александра Маквина, мы создаём образы, которые останавливают взгляд 
                  и заставляют чувствовать. Тьма и свет, сила и уязвимость — контрасты, которые делают нас живыми.
                </p>
              </div>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 hover:border-secondary transition-colors duration-300">
                  <p className="text-5xl font-bold text-primary mb-2 animate-float">15+</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold">Лет бунта</p>
                </div>
                <div className="border-l-4 border-secondary pl-6 hover:border-primary transition-colors duration-300">
                  <p className="text-5xl font-bold text-secondary mb-2 animate-float" style={{ animationDelay: '0.5s' }}>500+</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold">Смелых образов</p>
                </div>
                <div className="border-l-4 border-primary pl-6 hover:border-secondary transition-colors duration-300">
                  <p className="text-5xl font-bold text-primary mb-2 animate-float" style={{ animationDelay: '1s' }}>20</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold">Провокаций</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="py-24 bg-card relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,69,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center">Коллекции</h2>
          <div className="flex gap-2 justify-center mb-16">
            <div className="w-12 h-1 bg-primary" />
            <div className="w-12 h-1 bg-secondary" />
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="border-2 border-border p-10 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover-scale relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-4xl font-bold ${collection.color}`}>{collection.name}</h3>
                    <span className="text-sm text-secondary uppercase tracking-[0.2em] font-bold">{collection.year}</span>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    <span className="font-bold text-primary">{collection.pieces}</span> произведений искусства
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center">Контакты</h2>
          <div className="flex gap-2 justify-center mb-16">
            <div className="w-12 h-1 bg-secondary" />
            <div className="w-12 h-1 bg-primary" />
          </div>
          
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-xl text-foreground font-medium">
              Готовы к трансформации? Свяжитесь с нами.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-2">
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-4" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Телефон</p>
                <p className="font-light">+7 (XXX) XXX-XX-XX</p>
              </div>
              <div className="space-y-2">
                <Icon name="Mail" size={32} className="mx-auto text-secondary mb-4" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-light">info@montiko.ru</p>
              </div>
              <div className="space-y-2">
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-4" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Адрес</p>
                <p className="font-light">Москва, ЦАО</p>
              </div>
            </div>

            <Button className="mt-12 px-10 py-7 text-lg font-bold hover-scale bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 border-2 border-primary">
              Начать трансформацию
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t-2 border-primary/30 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MONTIKO</h3>
          <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] font-bold">
            Дизайн костюма • 2024
          </p>
          <p className="text-xs text-muted-foreground mt-4 italic">
            "Мода умирает молодой, стиль — никогда"
          </p>
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
