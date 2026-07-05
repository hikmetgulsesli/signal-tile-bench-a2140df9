// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Utility - Signal Tile Bench
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { CircleAlert, RefreshCw } from "lucide-react";


export type StatusUtilitySignalTileBenchActionId = "retry-1" | "refresh-status-2";

export interface StatusUtilitySignalTileBenchProps {
  actions?: Partial<Record<StatusUtilitySignalTileBenchActionId, () => void>>;

}

export function StatusUtilitySignalTileBench({ actions }: StatusUtilitySignalTileBenchProps) {
  return (
    <>
      {/* Main Container */}
      <main className="w-full max-w-[600px] bg-white border border-outline-variant rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Top App Bar equivalent header for utility */}
      <header className="flex justify-between items-center h-12 px-md w-full bg-surface border-b border-outline-variant">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Signal Tile Bench</h1>
      <div className="flex items-center gap-sm">
      <span className="font-mono-data text-mono-data text-on-surface-variant" id="live-timestamp">2023-10-27 14:32:01</span>
      </div>
      </header>
      {/* Content Area */}
      <div className="p-lg space-y-lg bg-white">
      {/* Error Banner (Hidden by default, shown for demonstration) */}
      <div className="hidden bg-error-container border border-error/20 p-md rounded flex items-start gap-md" id="error-banner">
      <CircleAlert  data-weight="fill" className="text-error mt-0.5" aria-hidden={true} focusable="false" />
      <div className="flex-1">
      <p className="font-body-sm text-body-sm text-on-error-container font-semibold">Local state synchronization failed.</p>
      <p className="font-body-sm text-body-sm text-on-error-container opacity-80 mt-1">Unable to fetch latest signal data. Check connection.</p>
      </div>
      <button className="font-label-caps text-label-caps text-error border border-error/30 hover:bg-error/10 px-3 py-1 rounded transition-colors duration-150 uppercase" type="button" data-action-id="retry-1" onClick={actions?.["retry-1"]}>Retry</button>
      </div>
      {/* Controls Row */}
      <div className="flex items-center justify-between bg-surface-container-low p-md rounded border border-outline-variant/50">
      <div className="flex items-center gap-md">
      <button className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-body-md text-body-md font-bold px-4 py-2 rounded transition-colors duration-150 ease-in-out flex items-center gap-xs" type="button" data-action-id="refresh-status-2" onClick={actions?.["refresh-status-2"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                              Refresh Status
                          </button>
      </div>
      <div className="flex items-center gap-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Paused</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-8 h-4 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-primary"></div>
      </label>
      <span className="font-label-caps text-label-caps text-primary uppercase font-bold">Ready</span>
      </div>
      </div>
      {/* Status Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
      {/* Tile 1 */}
      <div className="border border-outline-variant rounded bg-white hover:bg-surface-container-low transition-colors duration-150">
      <div className="bg-surface-container-low px-sm py-2 border-b border-outline-variant flex items-center justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Process A</span>
      <div className="w-2 h-2 rounded-full bg-[#10b981]"></div> {/* Success Green */}
      </div>
      <div className="p-sm">
      <div className="font-mono-data text-mono-data text-on-surface">SYS_ACTIVE</div>
      <div className="font-body-sm text-body-sm text-outline mt-1 truncate">Latency: 12ms</div>
      </div>
      </div>
      {/* Tile 2 */}
      <div className="border border-outline-variant rounded bg-white hover:bg-surface-container-low transition-colors duration-150">
      <div className="bg-surface-container-low px-sm py-2 border-b border-outline-variant flex items-center justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">System B</span>
      <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div> {/* Warning Amber */}
      </div>
      <div className="p-sm">
      <div className="font-mono-data text-mono-data text-on-surface">DB_SYNC_WARN</div>
      <div className="font-body-sm text-body-sm text-outline mt-1 truncate">Queue: 145 items</div>
      </div>
      </div>
      {/* Tile 3 */}
      <div className="border border-outline-variant rounded bg-white hover:bg-surface-container-low transition-colors duration-150">
      <div className="bg-surface-container-low px-sm py-2 border-b border-outline-variant flex items-center justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Feed C</span>
      <div className="w-2 h-2 rounded-full bg-error"></div> {/* Error Red */}
      </div>
      <div className="p-sm">
      <div className="font-mono-data text-mono-data text-on-surface">CONN_DROPPED</div>
      <div className="font-body-sm text-body-sm text-outline mt-1 truncate">Last seen: 4m ago</div>
      </div>
      </div>
      </div>
      </div>
      </main>
      
    </>
  );
}
