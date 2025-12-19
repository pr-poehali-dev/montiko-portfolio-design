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
      title: 'Классический костюм',
      category: 'Вечерняя коллекция',
      image: 'https://cdn.poehali.dev/projects/ed1e2672-d86c-4ae9-a3d7-4a624c29a522/files/816f9797-8c64-4b98-bd2f-84f5fd1424f8.jpg',
    },
    {
      id: 2,
      title: 'Авангард',
      category: 'Творческая линия',
      image: 'https://cdn.poehali.dev/projects/ed1e2672-d86c-4ae9-a3d7-4a624c29a522/files/e1767646-b78c-48d7-8367-8915bdd4d277.jpg',
    },
    {
      id: 3,
      title: 'Ателье процесс',
      category: 'За кулисами',
      image: 'https://cdn.poehali.dev/projects/ed1e2672-d86c-4ae9-a3d7-4a624c29a522/files/d7dcc839-8290-499d-9b89-71785174284b.jpg',
    },
  ];

  const collections = [
    { name: 'Вечерняя элегантность', year: '2024', pieces: 12 },
    { name: 'Городской шик', year: '2024', pieces: 18 },
    { name: 'Авторская линия', year: '2023', pieces: 8 },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-wider text-primary">MONTIKO</h1>
            <div className="hidden md:flex gap-8 items-center">
              {['home', 'portfolio', 'about', 'collections', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm tracking-wider uppercase transition-colors hover:text-primary ${
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-7xl md:text-9xl font-light mb-6 animate-fade-in tracking-tight">
            MONTIKO
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up font-light tracking-widest">
            ДИЗАЙН КОСТЮМА
          </p>
          <div className="w-24 h-px bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in font-light leading-relaxed">
            Создаём уникальные костюмы с авторским почерком. Каждая деталь продумана до совершенства.
          </p>
          <Button 
            onClick={() => scrollToSection('portfolio')}
            className="mt-12 px-8 py-6 text-lg hover-scale"
          >
            Посмотреть работы
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-center">Портфолио</h2>
          <div className="w-24 h-px bg-primary mx-auto mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden bg-muted aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-xs text-primary uppercase tracking-widest mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-2xl font-light">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light mb-4 text-center">О бренде</h2>
            <div className="w-24 h-px bg-primary mx-auto mb-16" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p className="text-lg">
                  MONTIKO — это больше, чем просто бренд одежды. Это философия индивидуального стиля 
                  и безупречного качества.
                </p>
                <p>
                  Мы создаём костюмы, которые подчёркивают личность владельца. Каждое изделие 
                  разрабатывается с учётом анатомических особенностей и предпочтений клиента.
                </p>
                <p>
                  Наш подход сочетает классические техники кроя с современными тенденциями, 
                  создавая неповторимый авторский почерк.
                </p>
              </div>
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-4xl font-light text-primary mb-2">15+</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Лет опыта</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-4xl font-light text-primary mb-2">300+</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Довольных клиентов</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-4xl font-light text-primary mb-2">12</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Коллекций</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-center">Коллекции</h2>
          <div className="w-24 h-px bg-primary mx-auto mb-16" />
          
          <div className="max-w-3xl mx-auto space-y-6">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="border border-border p-8 hover:border-primary transition-colors duration-300 hover-scale"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-light">{collection.name}</h3>
                  <span className="text-sm text-primary uppercase tracking-wider">{collection.year}</span>
                </div>
                <p className="text-muted-foreground font-light">
                  {collection.pieces} уникальных изделий
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-center">Контакты</h2>
          <div className="w-24 h-px bg-primary mx-auto mb-16" />
          
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-lg text-muted-foreground font-light">
              Свяжитесь с нами для консультации или индивидуального заказа
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-2">
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-4" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Телефон</p>
                <p className="font-light">+7 (XXX) XXX-XX-XX</p>
              </div>
              <div className="space-y-2">
                <Icon name="Mail" size={32} className="mx-auto text-primary mb-4" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-light">info@montiko.ru</p>
              </div>
              <div className="space-y-2">
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-4" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Адрес</p>
                <p className="font-light">Москва, ЦАО</p>
              </div>
            </div>

            <Button className="mt-12 px-8 py-6 text-lg hover-scale">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-light mb-4 text-primary">MONTIKO</h3>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Дизайн костюма • 2024
          </p>
        </div>
      </footer>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-primary">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Увеличенное изображение"
              className="w-full h-auto animate-scale-in"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
