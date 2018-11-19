import {createGlobalStyle} from 'styled-components'
export const IconFont = createGlobalStyle`
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1542642978261'); /* IE9*/
    src: url('./iconfont.eot?t=1542642978261#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAbcAAsAAAAACdwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8d0lnY21hcAAAAYAAAABuAAAByIEKg5xnbHlmAAAB8AAAAtAAAANQYRlKD2hlYWQAAATAAAAALwAAADYTUT/7aGhlYQAABPAAAAAcAAAAJAfeA4dobXR4AAAFDAAAAA4AAAAYGAAAAGxvY2EAAAUcAAAADgAAAA4C+AIcbWF4cAAABSwAAAAeAAAAIAESAGBuYW1lAAAFTAAAAUUAAAJtPlT+fXBvc3QAAAaUAAAARQAAAFc2loXXeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMT4vZW7438AQw9zA0AAUZgTJAQDl/QxaeJztkdEJgDAMRF+0VRGn8NtJxHX0y3njGJqkKriDV17pHaGBBMhAbUxGAtkRXJulEnlNH3liNj/QUZFUNGur47GeJ3zdK7Hq53gnsb+q6NLwa4h7uV32KRbifeM70Lbge9KxYHPkWAukC/76G5YAAHicNVLNaxNBHJ03s9mdXZLdph8JTdvUmGZjG9qmSZs1riZqVVqtVq0UREXUUho/af04VEREiUaheBDr0YPosQchZ4UWQRQ8+TcYQT14K3T1l2iH4Q3ze8O833szjDP256l4wJdYkHUx5ksW4AwgaUKLIpzJOeEE7ahGOxPi/mosAaX6qFJVlGrFLfWteVcWloVYXpiv4+ha3+yOSlWIaoUw2bO6ssnMLywzRlqMiSN8N7PZFGOJ4aFBxC2YiKJIqJHSAK1h0iLFcCiccQpIEkuVQp2rt9U40o0QzfBQKLsdeWSKRA/AIhSWT6rKLampln6o6+bBqbshYQYljzw7P/0onlD9PkX6FK967HaEW02SR5+ePf4gEVOsJlVxwLlojBu69Jn64e75GlQFKWE1aaJzdBL8wpTUfaY8d4Pj1JExA0KxJF7izKSUPkuevsxxYuyAVKUlr3NO1wFbGvKh4jhr+P/zQ7wXrSzMdjJWt5zCZtjd5NhphE9GknWbNEeokHNyDbbAKRHKolXVTPCPbikBJErupQrnn1f2AHtWPnNe8WpGC9A1vTQ02I9oJDvhTqYt07TSk+5ENhJF/+DQkmhFOpVKQ5RLi7UXeSD/orZYKm+4ehCITJTd/FzaLkayCnr6m2j090DJRop2ei7vlskHyMdvsS7aWYoxJ8cchWmxYTsZo27rDdsavZattjVQy9l1g1RUmx/78bDm/fLyJu77g95Hvrf3+fpJf4dx9IOpB/xX0wc+GBzROy8FZPNP+aUdD3eXN751Iwjl4FYxfrtDR/z1Lh3wzSQ70yrv5M0XNdFlvPG+/8/3q3gn+lgL66X/FbMwEqccg9RUjJIL0g8etuOxrWpbsDXkos2JO+FYJjciZr1X30dH7SyQtfmnxmoFjI1hIxAwyjO4Blw3Ao+fbHuLjI0f/855LXaG7zf8fsNr0QP3CvsQ0NlfYFyeYHicY2BkYGAA4rRjr2fH89t8ZeBmYQCBGxL/lBD0/wksDMxaQC4HAxNIFAA8KQpNAHicY2BkYGBu+N/AEMPCAAJAkpEBFbABAEcMAm94nGNhYGBgwYIBAWgAGQAAAAAAAAA2ALYBGgFmAagAAHicY2BkYGBgYwhhYGIAARDJBYQMDP/BfAYAEU4BcwAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAjZGJkZmRhZGVkY2RnYErLTEvPSUxKzMvna0otSA1sYS5IjOPvbI0NzE/KZO9ACieU5rHwAAAL2IOIQAAAA==') format('woff'),
    url('./iconfont.ttf?t=1542642978261') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1542642978261#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
`