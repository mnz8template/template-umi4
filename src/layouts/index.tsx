import { Link, Outlet, useAppData, useLocation, useParams } from 'umi';
import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

const UmiLayout: React.FC = () => {
  const { routes } = useAppData();
  const collator = new Intl.Collator('en');
  const location = useLocation();
  // 动态路由处理
  const p = useParams();
  const p_k_length = Object.keys(p).length;
  const l_p_s = location.pathname.split('/');
  const l_p_s_p = l_p_s.slice(0, l_p_s.length - p_k_length).join('/');

  const items = Object.entries(routes)
    .filter(([, value]) => !(value.id === '@@/global-layout' || value.id === '404'))
    .filter(([key]) => !key?.includes('$')) // 过滤动态路由
    .sort(([x], [y]) => collator.compare(x, y))
    .map(([, value]) => {
      if (value.path === '/') {
        return {
          label: <Link to={value.path}>{value.id}</Link>,
          key: value.path,
        };
      }
      return {
        label: <Link to={value.path!}>{value.path}</Link>,
        key: '/' + value.path,
      };
    });

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light">
        <Menu mode="inline" items={items} defaultSelectedKeys={[p_k_length > 0 ? l_p_s_p : location.pathname]} />
      </Sider>
      <Content style={{ margin: '0 16px' }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default UmiLayout;
