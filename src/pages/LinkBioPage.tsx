import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { banks, type Bank, type Category, type Store } from "@/data/cashbackData"
import { SocialFooter } from "@/components/SocialFooter"
import { Send, MessageCircle, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 25 },
  },
}

const socials = [
  { icon: Send, href: "#", label: "Telegram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Mail, href: "#", label: "Email" },
]

function GlassCard({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <motion.div
      className={`relative rounded-[20px] overflow-hidden cursor-pointer ${className}`}
      style={{
        background: "rgba(255,255,255,0.45)",
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.6), 0 8px 32px rgba(0,0,0,0.08)",
        border: "1px solid rgba(255,255,255,0.5)",
      }}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      onClick={onClick}
    >
      <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)", borderRadius: "20px 20px 0 0" }} />
      {children}
    </motion.div>
  )
}

function BankList({ onSelect }: { onSelect: (bank: Bank) => void }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-3">
      <motion.div variants={itemVariants} className="text-center pb-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(20px)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
          <span className="text-3xl">💳</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Кэшбэк-помощник</h1>
        <p className="text-sm text-gray-500 mt-1">Выберите банк, чтобы найти лучший кэшбэк</p>
      </motion.div>

      {banks.map((bank) => (
        <motion.div key={bank.id} variants={itemVariants}>
          <GlassCard onClick={() => onSelect(bank)}>
            <div className="flex items-center gap-4 px-4 py-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", border: "1px solid rgba(255,255,255,0.6)" }}>
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = "none"
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<div style="width:32px;height:32px;border-radius:8px;background:${bank.color};display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:14px">${bank.name[0]}</div>`
                    }
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-gray-800">{bank.name}</h3>
                <p className="text-[12px] text-gray-500 mt-0.5">до {Math.max(...bank.categories.flatMap(c => c.stores.map(s => parseInt(s.cashback))))}% кэшбэка</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: bank.color }} />
                <Icon name="ChevronRight" size={18} className="text-gray-400" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  )
}

function CategoryList({ bank, onSelect, onBack }: { bank: Bank; onSelect: (cat: Category) => void; onBack: () => void }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-3">
      <motion.div variants={itemVariants}>
        <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-2">
          <Icon name="ArrowLeft" size={16} />
          Все банки
        </button>
        <GlassCard className="cursor-default">
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <img src={bank.logo} alt={bank.name} className="w-8 h-8 object-contain"
                onError={(e) => {
                  const t = e.currentTarget; t.style.display = "none"
                  const p = t.parentElement
                  if (p) p.innerHTML = `<div style="width:32px;height:32px;border-radius:8px;background:${bank.color};display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:14px">${bank.name[0]}</div>`
                }}
              />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-gray-800">{bank.name}</h2>
              <p className="text-[12px] text-gray-500">Выберите категорию</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {bank.categories.map((cat) => (
          <motion.div key={cat.id} variants={itemVariants}>
            <GlassCard onClick={() => onSelect(cat)}>
              <div className="flex flex-col items-center justify-center py-5 px-2 text-center">
                <span className="text-2xl mb-2">{cat.emoji}</span>
                <span className="text-[13px] font-semibold text-gray-700 leading-tight">{cat.name}</span>
                <span className="text-[11px] text-gray-400 mt-1">{cat.stores.length} магазина</span>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function StoreList({ bank, category, onBack }: { bank: Bank; category: Category; onBack: () => void }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-3">
      <motion.div variants={itemVariants}>
        <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-2">
          <Icon name="ArrowLeft" size={16} />
          {bank.name}
        </button>
        <div className="text-center py-3">
          <span className="text-3xl">{category.emoji}</span>
          <h2 className="text-[18px] font-bold text-gray-800 mt-2">{category.name}</h2>
          <p className="text-[12px] text-gray-500 mt-1">Кэшбэк в {bank.name}</p>
        </div>
      </motion.div>

      {category.stores.map((store) => (
        <motion.div key={store.name} variants={itemVariants}>
          <GlassCard className="cursor-default">
            <div className="flex items-center gap-4 px-4 py-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <img src={store.logo} alt={store.name} className="w-8 h-8 object-contain"
                  onError={(e) => {
                    const t = e.currentTarget; t.style.display = "none"
                    const p = t.parentElement
                    if (p) p.innerHTML = `<div style="width:32px;height:32px;border-radius:8px;background:#e5e7eb;display:flex;align-items:center;justify-content:center;color:#6b7280;font-weight:700;font-size:13px">${store.name[0]}</div>`
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-gray-800">{store.name}</h3>
                <p className="text-[12px] text-gray-500 mt-0.5">Начисляется при оплате картой</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[18px] font-bold" style={{ color: bank.color }}>{store.cashback}</span>
                <span className="text-[11px] text-gray-400">кэшбэк</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  )
}

type Screen = { type: "banks" } | { type: "categories"; bank: Bank } | { type: "stores"; bank: Bank; category: Category }

export function LinkBioPage() {
  const [screen, setScreen] = useState<Screen>({ type: "banks" })

  return (
    <main className="relative min-h-screen px-6 py-10 flex flex-col overflow-hidden">
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      <motion.div className="fixed z-0 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(147,51,234,0.25) 0%, transparent 70%)", filter: "blur(60px)", top: "-10%", left: "-10%" }} animate={{ x: [0,100,50,0], y: [0,50,100,0], scale: [1,1.2,0.9,1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="fixed z-0 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)", filter: "blur(80px)", top: "30%", right: "-20%" }} animate={{ x: [0,-80,-40,0], y: [0,80,-40,0], scale: [1,0.85,1.15,1] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="fixed z-0 w-[450px] h-[450px] rounded-full" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)", filter: "blur(70px)", bottom: "-5%", left: "20%" }} animate={{ x: [0,60,-30,0], y: [0,-60,30,0], scale: [1,1.1,0.95,1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />

      <div className="pointer-events-none fixed inset-0 z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, opacity: 0.025 }} />

      <div className="relative z-10 mx-auto max-w-[400px] w-full flex flex-col flex-1 justify-between">
        <div className="flex-1 pb-8">
          <AnimatePresence mode="wait">
            {screen.type === "banks" && (
              <motion.div key="banks" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.2 }}>
                <BankList onSelect={(bank) => setScreen({ type: "categories", bank })} />
              </motion.div>
            )}
            {screen.type === "categories" && (
              <motion.div key="categories" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                <CategoryList
                  bank={screen.bank}
                  onSelect={(cat) => setScreen({ type: "stores", bank: screen.bank, category: cat })}
                  onBack={() => setScreen({ type: "banks" })}
                />
              </motion.div>
            )}
            {screen.type === "stores" && (
              <motion.div key="stores" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                <StoreList
                  bank={screen.bank}
                  category={screen.category}
                  onBack={() => screen.type === "stores" && setScreen({ type: "categories", bank: screen.bank })}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <SocialFooter socials={socials} copyright="2025 Кэшбэк-помощник" />
      </div>
    </main>
  )
}
