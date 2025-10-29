import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-primary text-primary-foreground z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flame" size={32} className="text-accent" />
              <span className="text-2xl font-bold">Chist</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-accent transition-colors">О нас</a>
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#pricing" className="hover:text-accent transition-colors">Прайс</a>
              <a href="#advantages" className="hover:text-accent transition-colors">Преимущества</a>
              <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
              <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональные сварочные работы любой сложности
            </h1>
            <p className="text-xl mb-4 text-white/90">
              Электросварка и газосварка от опытных специалистов. Гарантия качества и соблюдение всех стандартов безопасности.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Icon name="Shield" size={16} className="text-accent" />
                <span>Гарантия до 3 лет</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Icon name="Clock" size={16} className="text-accent" />
                <span>Выполнение в срок</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Icon name="BadgeCheck" size={16} className="text-accent" />
                <span>Сертифицированные мастера</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-2 border-accent hover:bg-accent hover:text-white text-lg px-8 py-6 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:scale-105 font-semibold"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">О компании Chist</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Молодая динамичная комания профессионалов. Современный подход к сварочным работам
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Target" size={32} className="text-accent" />
                </div>
                <CardTitle>Фокус на качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Каждый проект выполняем с максимальной точностью и вниманием к деталям
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-accent" />
                </div>
                <CardTitle>Опытные специалисты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мастера с профильным образованием и сертификатами, готовые решать сложные задачи
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={32} className="text-accent" />
                </div>
                <CardTitle>Современное оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работаем на новейшем профессиональном оборудовании от ведущих производителей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Предоставляем полный спектр сварочных работ с использованием современных технологий
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Электросварка</CardTitle>
                    <CardDescription className="text-base">
                      Сварка металлоконструкций методом ручной дуговой сварки (MMA)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Сварка черных металлов и стали</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Сварка нержавеющей стали</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Монтаж металлоконструкций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Ремонт металлических изделий</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Flame" size={24} className="text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Газосварка</CardTitle>
                    <CardDescription className="text-base">
                      Газопламенная сварка и резка металлов
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Газовая резка металла</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Сварка тонколистового металла</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Сварка цветных металлов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Пайка и наплавка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Прозрачные цены на наши услуги. Точная стоимость рассчитывается после осмотра объекта
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b-2 border-primary font-semibold">
                    <div>Вид работ</div>
                    <div>Единица измерения</div>
                    <div className="text-right">Цена, руб.</div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 text-primary">Электросварка</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Сварка металлоконструкций</div>
                        <div className="text-muted-foreground">1 м шва</div>
                        <div className="text-right font-semibold">от 300</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Сварка нержавейки</div>
                        <div className="text-muted-foreground">1 м шва</div>
                        <div className="text-right font-semibold">от 500</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Монтаж металлоконструкций</div>
                        <div className="text-muted-foreground">1 час работы</div>
                        <div className="text-right font-semibold">от 1 500</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Сварка ворот, калиток</div>
                        <div className="text-muted-foreground">1 шт</div>
                        <div className="text-right font-semibold">от 5 000</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-bold text-lg mb-4 text-primary">Газосварка и резка</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Газовая резка металла</div>
                        <div className="text-muted-foreground">1 м реза</div>
                        <div className="text-right font-semibold">от 200</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Сварка цветных металлов</div>
                        <div className="text-muted-foreground">1 м шва</div>
                        <div className="text-right font-semibold">от 600</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Пайка твердыми припоями</div>
                        <div className="text-muted-foreground">1 соединение</div>
                        <div className="text-right font-semibold">от 400</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-bold text-lg mb-4 text-primary">Дополнительные услуги</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Выезд специалиста</div>
                        <div className="text-muted-foreground">в пределах города</div>
                        <div className="text-right font-semibold">Бесплатно</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Консультация и замер</div>
                        <div className="text-muted-foreground">—</div>
                        <div className="text-right font-semibold">Бесплатно</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>Срочный заказ (за сутки)</div>
                        <div className="text-muted-foreground">% от заказа</div>
                        <div className="text-right font-semibold">+30%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold mb-1">Окончательная стоимость работ определяется после осмотра объекта</p>
                      <p className="text-xs text-muted-foreground">Выезд специалиста для замера и консультации — бесплатно!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto">
            Примеры выполненных проектов — от простых конструкций до сложных металлоизделий
          </p>
          <p className="text-center text-white/60 text-sm mb-12">
            <Icon name="ArrowRight" size={16} className="inline mr-2" />
            Прокрутите для просмотра
          </p>
        </div>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
              <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden border-2 border-accent/30 hover:border-accent transition-all group hover:scale-105">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Image" size={56} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-base text-white/70 font-semibold">Место для фото работы №1</p>
                    <p className="text-sm text-white/50 mt-2">Сварка металлоконструкций</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
              <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden border-2 border-accent/30 hover:border-accent transition-all group hover:scale-105">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Image" size={56} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-base text-white/70 font-semibold">Место для фото работы №2</p>
                    <p className="text-sm text-white/50 mt-2">Изготовление ворот</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
              <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden border-2 border-accent/30 hover:border-accent transition-all group hover:scale-105">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Image" size={56} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-base text-white/70 font-semibold">Место для фото работы №3</p>
                    <p className="text-sm text-white/50 mt-2">Ремонт металлических изделий</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
              <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden border-2 border-accent/30 hover:border-accent transition-all group hover:scale-105">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Image" size={56} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-base text-white/70 font-semibold">Место для фото работы №4</p>
                    <p className="text-sm text-white/50 mt-2">Газовая резка</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
              <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden border-2 border-accent/30 hover:border-accent transition-all group hover:scale-105">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Image" size={56} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-base text-white/70 font-semibold">Место для фото работы №5</p>
                    <p className="text-sm text-white/50 mt-2">Сварка нержавейки</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
              <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden border-2 border-accent/30 hover:border-accent transition-all group hover:scale-105">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Image" size={56} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-base text-white/70 font-semibold">Место для фото работы №6</p>
                    <p className="text-sm text-white/50 mt-2">Монтаж конструкций</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
              <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden border-2 border-accent/30 hover:border-accent transition-all group hover:scale-105">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Image" size={56} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-base text-white/70 font-semibold">Место для фото работы №7</p>
                    <p className="text-sm text-white/50 mt-2">Сварка трубопроводов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
              <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden border-2 border-accent/30 hover:border-accent transition-all group hover:scale-105">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Image" size={56} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-base text-white/70 font-semibold">Место для фото работы №8</p>
                    <p className="text-sm text-white/50 mt-2">Изготовление лестниц</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Почему выбирают Chist</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            7 причин доверить сварочные работы профессионалам нашей компании
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-bold mb-2">Опытные сварщики</h3>
                <p className="text-muted-foreground text-sm">
                  Стаж работы от 10 лет, все необходимые допуски и сертификаты
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-bold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground text-sm">
                  Предоставляем гарантию на все виды выполненных работ до 3 лет
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-bold mb-2">Соблюдение сроков</h3>
                <p className="text-muted-foreground text-sm">
                  Строго выполняем работы в оговоренные сроки, возможен срочный заказ
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="font-bold mb-2">Прозрачное ценообразование</h3>
                <p className="text-muted-foreground text-sm">
                  Фиксируем стоимость в договоре, никаких скрытых платежей
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="font-bold mb-2">Выезд по городу</h3>
                <p className="text-muted-foreground text-sm">
                  Бесплатный выезд мастера для замера и консультации на объект
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="font-bold mb-2">Работа с юр. лицами</h3>
                <p className="text-muted-foreground text-sm">
                  Полный пакет документов, работаем по договору, НДС
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xl">
                7
              </div>
              <div>
                <h3 className="font-bold mb-2">Безопасность</h3>
                <p className="text-muted-foreground text-sm">
                  Строгое соблюдение техники безопасности и охраны труда
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Часто задаваемые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ответы на популярные вопросы о наших услугах
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white px-6 rounded-lg border-none shadow">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">Какие гарантии вы предоставляете на работы?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы предоставляем гарантию на все виды сварочных работ сроком до 3 лет. Гарантия фиксируется в договоре и распространяется на качество швов, прочность конструкций и отсутствие дефектов сварки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white px-6 rounded-lg border-none shadow">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">Сколько времени занимает выполнение заказа?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Сроки выполнения зависят от объема и сложности работ. Простые работы выполняем за 1-2 дня, крупные проекты — до 2 недель. Есть возможность срочного выполнения заказа за доплату 30%.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white px-6 rounded-lg border-none shadow">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">Выезжаете ли вы на объект?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы работаем как на нашей производственной базе, так и выезжаем на объекты заказчика. Выезд мастера для консультации и замера в пределах города бесплатный.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white px-6 rounded-lg border-none shadow">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">Какие металлы вы свариваете?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы работаем с различными видами металлов: черная сталь, нержавеющая сталь, алюминий, медь, латунь и другие цветные металлы. Применяем различные методы сварки в зависимости от материала.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white px-6 rounded-lg border-none shadow">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">Как рассчитывается стоимость работ?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Стоимость зависит от типа работ, объема, сложности конструкции и используемых материалов. После осмотра объекта мастер составляет смету, которая фиксируется в договоре. Цена не меняется в процессе работы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white px-6 rounded-lg border-none shadow">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-semibold">Работаете ли вы с юридическими лицами?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем полный пакет документов, работаем по договору, возможна оплата с НДС.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 20:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@chist.ru</p>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. XX</p>
                    <p className="text-sm text-muted-foreground mt-1">Производственная база</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в ближайшее время для уточнения деталей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите задачу"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" size={28} className="text-accent" />
                <span className="text-xl font-bold">Chist</span>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Профессиональные сварочные работы любой сложности. Современный подход и качество исполнения.
              </p>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Phone" size={18} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Mail" size={18} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="MessageCircle" size={18} className="text-white" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Электросварка</li>
                <li>Газосварка</li>
                <li>Монтаж металлоконструкций</li>
                <li>Резка металла</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (XXX) XXX-XX-XX</li>
                <li>info@chist.ru</li>
                <li>г. Москва, ул. Промышленная</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 Chist. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}