const MenuItem = ({ icon, text }) => {
  return (
    <li className="flex flex-row items-center justify-start gap-2">
      {icon}
      <span>{text}</span>
    </li>
  )
}

export default MenuItem
