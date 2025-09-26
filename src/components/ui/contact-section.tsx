import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لخدمتك في أي وقت، تواصل معنا أو قم بزيارتنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="p-6 text-center hover:shadow-warm transition-shadow">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">العنوان</h3>
            <p className="text-muted-foreground">
              شارع الملك فهد<br />
              الرياض، المملكة العربية السعودية
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-warm transition-shadow">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">الهاتف</h3>
            <p className="text-muted-foreground">
              +966 11 234 5678<br />
              +966 50 123 4567
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-warm transition-shadow">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">ساعات العمل</h3>
            <p className="text-muted-foreground">
              يومياً: 12:00 ظهراً - 2:00 صباحاً<br />
              الجمعة: 2:00 ظهراً - 2:00 صباحاً
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-warm transition-shadow">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">البريد الإلكتروني</h3>
            <p className="text-muted-foreground">
              info@kolwnam.com<br />
              orders@kolwnam.com
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-warm text-white border-0 hover:scale-105 transition-transform shadow-warm px-12 py-6 text-lg"
          >
            احجز طاولتك الآن
          </Button>
        </div>
      </div>
    </section>
  );
};