import getNavLinks from "./links";

export default async function IndexPage() {
  const navResources = await getNavLinks();
  const navItems = navResources.map(n => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id,
    }
  })

  return <div className="container relative mx-auto min-h-screen w-full px-0">
    <div>

    </div>
  </div>
}
