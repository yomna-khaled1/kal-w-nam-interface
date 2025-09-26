import { Card } from "@/components/ui/card";

const menuItems = [
  {
    id: 1,
    name: "كباب مشوي",
    description: "كباب لحم طازج مشوي على الفحم مع الخضروات",
    price: "45 ريال",
    category: "المشاوي"
  },
  {
    id: 2,
    name: "مندي لحم",
    description: "أرز بسمتي معطر مع لحم طري ومطبوخ بالطريقة التقليدية",
    price: "55 ريال",
    category: "الأرز"
  },
  {
    id: 3,
    name: "حمص بالطحينة",
    description: "حمص كريمي مع الطحينة وزيت الزيتون البكر",
    price: "18 ريال",
    category: "المقبلات"
  },
  {
    id: 4,
    name: "شاورما دجاج",
    description: "دجاج مشوي متبل بالأعشاب والتوابل العربية",
    price: "35 ريال",
    category: "الدجاج"
  },
  {
    id: 5,
    name: "ملوخية باللحم",
    description: "ملوخية طازجة مطبوخة مع قطع اللحم الطرية",
    price: "42 ريال",
    category: "الطبخات"
  },
  {
    id: 6,
    name: "فتوش",
    description: "سلطة خضار مشكلة مع الخبز المحمص والسماق",
    price: "22 ريال",
    category: "السلطات"
  }
];

const categories = ["الكل", "المشاوي", "الأرز", "المقبلات", "الدجاج", "الطبخات", "السلطات"];

export const MenuSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            قائمة الطعام
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من مجموعة متنوعة من الأطباق العربية الأصيلة المحضرة بعناية
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="p-6 hover:shadow-warm transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <span className="text-sm text-accent font-medium px-3 py-1 bg-accent/10 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {item.price}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};