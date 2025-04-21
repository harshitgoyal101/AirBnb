export function Avatar({name, size= "small"} : {name: string, size?: string}) {
  return <div className={`relative inline-flex items-center justify-center
  overflow-hidden rounded-full bg-black ${size === "small" ? "w-5 h-5" : "w-52 h-52"}`}>
    <span className={`text-white ${size === "small" ? "text-xs " : "text-9xl font-semibold"}`}>{name[0]}</span>
  </div>
} 