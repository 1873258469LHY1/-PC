import Mock from 'mockjs'
import banners from './cbanners'
import floors from './cfloors'

Mock.mock('/mock/banners','get',{
    code:200,
    data:banners
})

Mock.mock('/mock/floor','get',{
    code:200,
    'data|2-4':floors
})