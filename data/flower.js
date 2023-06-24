import Category from '../models/category'
import Orchid from '../models/orchid'


export const CATEGORIES = [
    new Category('c1', 'Lan Tím', '#8333da'),
    new Category('c2', 'Lan Đỏ', '#f54242'),
    new Category('c3', 'Lan Cam', '#f97e13'),
    new Category('c5', 'Lan Vàng', '#f5d142'),
    new Category('c6', 'Lan Đột Biến', '#368dff'),
    new Category('c4', 'Lan Trắng', '#ffc7ff'),
]


export const ORCHIDS = [
    new Orchid(
        "o1",
        ['c1', 'c6'],
        'Chùm Lan Tím',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/chumlantim3.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o2",
        ['c3'],
        'Lan Cam',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/lancam.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o3",
        ['c2'],
        'Lan Đỏ',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/lando.png'),
        '5.0',
        '99.99',
    ),
    new Orchid(
        "o4",
        ['c6'],
        'Lan Đột Biến',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/landotbien.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o5",
        ['c6', 'c1'],
        'Lan Đột Biến',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/phonglan.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o6",
        ['c1'],
        'Lan Tím',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/lantim.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o7",
        ['c1'],
        'Lan Tím Huế',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/lantim2.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o8",
        ['c1'],
        'Lan Tím Hà Nội',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/lantimnhe.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o9",
        ['c4'],
        'Lan Trắng',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/hoalantrang.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o10",
        ['c5'],
        'Lan Vàng',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/lanvang.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o11",
        ['c5', 'c6'],
        'Lan Vàng 5 cánh',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/lanvang5canh.png'),
        '5.0',
        '99.99'
    ),
    new Orchid(
        "o12",
        ['c5', 'c6'],
        'Lan Vàng Spa',
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus laboriosam culpa incidunt eveniet tempora.Fugiat tempora natus blanditiis vitae nesciunt esse id ipsa sit aperiam quae a nemo, debitis quam!",
        require('../assets/lanvangcoco.png'),
        '5.0',
        '99.99'
    ),
]
