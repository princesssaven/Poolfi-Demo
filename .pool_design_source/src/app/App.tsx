import { useState } from 'react';
import Desktop26 from '../imports/Desktop26';
import CreateAPool from '../imports/CreateAPool';
import CreateAnImpactPool from '../imports/CreateAnImpactPool';
import ContainerGradient from '../imports/ContainerGradient';
import Contributors from '../imports/Contributors';
import Frame211 from '../imports/Frame211';
import Frame213 from '../imports/Frame213';
import Updates from '../imports/Updates';
import Withdrawal from '../imports/Withdrawal';
import Impact from '../imports/Impact';
import ImpactContributon from '../imports/ImpactContributon';

type ScreenType = 'desktop' | 'create-pool' | 'create-impact-pool' | 'submitted' | 'contributors' | 'request-withdrawal-1' | 'request-withdrawal-2' | 'updates' | 'withdrawal' | 'impact' | 'impact-contribution';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('desktop');

  const screens: Record<ScreenType, { label: string; component: JSX.Element }> = {
    'desktop': { label: 'Withdrawal Approval', component: <Desktop26 /> },
    'create-pool': { label: 'Create Pool', component: <CreateAPool /> },
    'create-impact-pool': { label: 'Create Impact Pool', component: <CreateAnImpactPool /> },
    'submitted': { label: 'Pool Submitted', component: <ContainerGradient /> },
    'contributors': { label: 'Contributors', component: <Contributors /> },
    'request-withdrawal-1': { label: 'Request Withdrawal', component: <Frame211 /> },
    'request-withdrawal-2': { label: 'Request Withdrawal (Alt)', component: <Frame213 /> },
    'updates': { label: 'Updates', component: <Updates /> },
    'withdrawal': { label: 'Withdrawal Details', component: <Withdrawal /> },
    'impact': { label: 'Impact Feed', component: <Impact /> },
    'impact-contribution': { label: 'Impact Pool Details', component: <ImpactContributon /> }
  };

  return (
    <div className="size-full flex flex-col bg-[#f4f5f7]">
      <div className="bg-white border-b border-[#e5e8ef] px-6 py-4">
        <div className="flex items-center gap-2 overflow-x-auto">
          {(Object.keys(screens) as ScreenType[]).map((screen) => (
            <button
              key={screen}
              onClick={() => setCurrentScreen(screen)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                currentScreen === screen
                  ? 'bg-[#1b4fd8] text-white'
                  : 'bg-[#f4f5f7] text-[#6b7280] hover:bg-[#e5e8ef]'
              }`}
            >
              {screens[screen].label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="size-full">
          {screens[currentScreen].component}
        </div>
      </div>
    </div>
  );
}
