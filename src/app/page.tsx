import { Cta } from "@/components/cta";
import { Depoiments } from "@/components/depoiments";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Informacoes } from "@/components/informacoes";
import { Services } from "@/components/services";
import AdvancedChartWidget from "@/components/trading-chart-widget";
import TradingViewWidget from "@/components/trading-view-widget";



export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TradingViewWidget />
      <Services />
      <Informacoes />
      <AdvancedChartWidget />
      <Depoiments />
      <Cta />
      <Footer />
    </main>
  );
}
