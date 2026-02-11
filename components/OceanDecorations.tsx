/* Декоративные элементы — Гласморфизм: мягкие формы, полупрозрачные сферы */

/**
 * AngularDivider → SoftWaveDivider — плавная волна
 */
export function AngularDivider({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        />
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40"
          stroke="rgba(167, 139, 250, 0.2)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

/**
 * NeonGrid → GlassOrbs — плавающие полупрозрачные сферы
 */
export function NeonGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Большая сфера */}
      <div
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)',
          animation: 'orbFloat 20s ease-in-out infinite',
        }}
      />
      {/* Средняя сфера */}
      <div
        className="absolute top-1/2 -left-10 w-[250px] h-[250px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.4) 0%, transparent 70%)',
          animation: 'orbFloat 25s ease-in-out infinite reverse',
        }}
      />
      {/* Малая сфера */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.3) 0%, transparent 70%)',
          animation: 'orbFloat 18s ease-in-out infinite',
          animationDelay: '-5s',
        }}
      />
      {/* Горизонтальные мягкие полосы */}
      <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/3 to-transparent" />
    </div>
  );
}

/**
 * GlitchLine → SoftGlow — мягкая полоса свечения
 */
export function GlitchLine({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#A78BFA]/30 to-transparent" />
    </div>
  );
}

/**
 * DotMatrix → SoftGrid — мягкая точечная сетка
 */
export function DotMatrix({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.03] ${className}`} aria-hidden="true">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        {Array.from({ length: 8 }, (_, row) =>
          Array.from({ length: 8 }, (_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 25 + 12}
              cy={row * 25 + 12}
              r="1"
              fill="#A78BFA"
              opacity="0.5"
            />
          ))
        )}
      </svg>
    </div>
  );
}

/**
 * HexagonDecor → GlassRing — кольцо из стекла
 */
export function HexagonDecor({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.05] ${className}`} aria-hidden="true">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="#A78BFA" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="#60A5FA" strokeWidth="0.3" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="#A78BFA" strokeWidth="0.3" fill="none" opacity="0.5" />
        <circle cx="100" cy="100" r="3" fill="#A78BFA" opacity="0.3" />
      </svg>
    </div>
  );
}

/**
 * ScanlineOverlay → отключён для glassmorphism (вместо этого мягкое свечение)
 */
export function ScanlineOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
      {/* Мягкий градиент сверху */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B0F1A]/50 to-transparent" />
    </div>
  );
}

/* Обратная совместимость */
export const WaveDivider = AngularDivider;
export const WaveDividerSoft = AngularDivider;
export const FloatingBubbles = NeonGrid;
export function FloatingFish({ className = '' }: { className?: string }) {
  return <GlitchLine className={className} />;
}
export function SeaweedDecor({ className: _className = '' }: { className?: string }) {
  return null;
}
export const WavePattern = DotMatrix;
export const Compass = HexagonDecor;
