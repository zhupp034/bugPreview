import { Link, Outlet } from 'umi'
import styles from './index.less'

export default function Layout() {
  console.log(test())
  async function test() {
    console.log(123)
  }

  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
