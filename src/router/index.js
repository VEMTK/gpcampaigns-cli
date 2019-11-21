import LoginComponent from '../components/login'
import LayoutComponent from '../components/layout'
import ChannelComponent from '../components/channel'
import ApkComponent from '../components/apk'
import CampaignsComponent from '../components/campaigns'
import DataComponent from '../components/data'

const routes = [
    { path: '/login', component: LoginComponent, name: '系统登录' },
    { path: '/', redirect: '/login' },
    {
        path: '/app',
        name: 'App',
        component: LayoutComponent,
        children: [
            {
                path: '/app/channel',
                component: ChannelComponent,
                name: '渠道信息',
                meta: {
                    auth: ['ROLE_ADMIN']
                }
            },
            {
                path: '/app/apk',
                component: ApkComponent,
                name: 'APK信息',
                meta: {
                    auth: ['ROLE_ADMIN']
                }
            },
            {
                path: '/app/campaigns',
                component: CampaignsComponent,
                name: '推广链接配置',
                meta: {
                    auth: ['ROLE_ADMIN', 'ROLE_CHANNEL']
                }
            },
            {
                path: '/data/list',
                component: DataComponent,
                name: '转化数据详情',
                meta: {
                    auth: ['ROLE_ADMIN', 'ROLE_CHANNEL']
                }
            },
        ]
    }
]

export default routes