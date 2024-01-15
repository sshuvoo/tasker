import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import FooterSection from './components/FooterSection';
import TaskBoard from './components/task-board/TaskBoard';

export default function App() {
   return (
      <>
         <HeaderSection />
         <HeroSection />
         <TaskBoard />
         <FooterSection />
      </>
   );
}
