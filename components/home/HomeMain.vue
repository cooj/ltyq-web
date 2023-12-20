<template>
    <section class="sec-index">
        <div class="py60px">
            <div class="container">
                <h3 class="mb30px text-center text-24px c-#333">
                    <span class="tle-line">{{ $lang('推荐产品', 'RECOMMEND PRODUCT') }}</span>
                </h3>
                <div class="swp-box">
                    <!-- :creative-effect="effect" effect="creative" -->
                    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :slides-per-view="4"
                        :space-between="25" :autoplay="{ delay: 5000, disableOnInteraction: true }"
                        :navigation="{ nextEl: '.swp-next', prevEl: '.swp-prev' }">
                        <SwiperSlide v-for="(item, idx) in data?.recommend" :key="idx">
                            <NuxtLink :to="`/goods/${item.id}`" class="banner-link">
                                <img :src="item.img" :alt="item.title">
                                <div class="cover">
                                    <span> {{ $lang('阅读更多', 'Read more') }}</span>
                                </div>
                            </NuxtLink>
                        </SwiperSlide>
                    </Swiper>
                    <div class="swp-next swiper-button-next">
                        <!-- <i class="i-ic:baseline-arrow-forward block" /> -->
                    </div>
                    <div class="swp-prev swiper-button-prev">
                        <!-- <i class="i-ic:baseline-arrow-back block" /> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="sec-item1 co-main-bg-color py60px c-#fff">
            <div class="container">
                <h3 class="mb30px text-center text-24px">
                    <span class="tle-line">{{ $lang('产品展示', 'PRODUCT DISPLAY') }}</span>
                </h3>
                <!-- <div class="px15px"> -->
                <el-row :gutter="30">
                    <el-col :xs="4" :sm="4" :md="5" :lg="5" :xl="5">
                        <dl class="goods-dl">
                            <dt class="co-main-color bg-#fff px10px py25px text-center text-20px">
                                {{ $lang('全部产品', 'ALL PRODUCTS') }}
                            </dt>
                            <dd v-for="item in data?.cate.cateList" :key="item.id">
                                <NuxtLinkLocale :to="`/goods?id=${item.id}`">
                                    {{ $lang(item?.title, item?.title_en) }}
                                </NuxtLinkLocale>
                            </dd>
                        </dl>
                    </el-col>
                    <el-col :xs="20" :sm="20" :md="19" :lg="19" :xl="19">
                        <!--  -->
                        <ul class="news-grid">
                            <li v-for="item in data?.cate.goodsList" :key="item.id">
                                <NuxtLinkLocale :to="`/goods/${item.id}`" class="link">
                                    <co-image :src="item.img" class="w100% b-1px b-#eee b-solid pb85% block!" />
                                </NuxtLinkLocale>
                                <h3 class="line-clamp-1 mt5px text-center font-bold">
                                    <NuxtLinkLocale :to="`/goods/${item.id}`" class="link-a">
                                        {{ $lang(item.title, item.title_en) }}
                                    </NuxtLinkLocale>
                                </h3>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
                <!-- </div> -->
            </div>
        </div>
        <div class="py60px">
            <div class="container">
                <h3 class="mb30px text-center text-24px c-#333">
                    <span class="tle-line">{{ $lang('公司风采', 'COMPANY ELEGANCE') }}</span>
                </h3>
                <el-row class="mien-list">
                    <el-col v-for="(item, index) in data?.mienList" :key="item.id" :span="12" class="flex"
                        :class="index > 1 ? 'n1' : ''">
                        <div class="mien-img w50%">
                            <co-image :src="item.img" class="w100% pb85% block!" />
                        </div>
                        <div class="mien-text w50%">
                            <h3 class="mb25px text-center text-28px c-#333">
                                {{ $lang(item.title, item.title_en) }}
                            </h3>
                            <NuxtLinkLocale :to="`/company/${item.id}`" class="link">
                                {{ $lang('了解更多+', 'Learn more +') }}
                            </NuxtLinkLocale>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="sec-item1 co-main-bg-color py60px c-#fff">
            <div class="container">
                <h3 class="mb35px text-center text-24px">
                    <span class="tle-line">{{ $lang('公司简介', 'COMPANY INFORMATION') }}</span>
                </h3>
                <div class="mb30px flex items-center">
                    <div class="w50%">
                        <div class="com-left relative mb30px">
                            <co-image :src="companyInfo?.img" class="com-translate w100% pb78% block!" />
                        </div>
                    </div>
                    <div class="w50% px25px">
                        <div class="com-cont pb10px" v-html="$lang(companyInfo?.content, companyInfo?.content_en)" />
                        <NuxtLinkLocale to="/about" class="link">
                            {{ $lang('查看更多+', 'Learn more +') }}
                        </NuxtLinkLocale>
                    </div>
                </div>
            </div>
        </div>
        <div class="py60px">
            <div class="container">
                <h3 class="mb30px text-center text-24px c-#333">
                    <span class="tle-line">{{ $lang('新闻资讯', 'NEWS INFORMATION') }}</span>
                </h3>
                <ul class="news-list grid gap20px">
                    <li v-for="(item) in data?.newsList" :key="item.id">
                        <NuxtLinkLocale :to="`/news/${item.id}`" class="news-link flex p10px">
                            <div class="w130px">
                                <co-image :src="item.img" fit="cover" class="w100% rounded-50% pb100% block!" />
                            </div>
                            <div class="w-[calc(100%-130px)] pl10px">
                                <h3 class="mb10px mt5px text-16px c-#000">
                                    {{ $lang(item.title, item.title_en) }}
                                </h3>
                                <div class="intro mb10px c-#555">
                                    {{ $lang(item?.describe, item?.describe_en) }}
                                </div>
                                <div class="co-main-color text-right text-13px">
                                    {{ $lang('查看>>', 'MORE >>') }}
                                </div>
                            </div>
                        </NuxtLinkLocale>
                    </li>
                </ul>
                <div class="mt25px text-center">
                    <NuxtLinkLocale to="/news" class="news-more">
                        {{ $lang('查看更多+', 'LEARN MORE +') }}
                    </NuxtLinkLocale>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const { $lang } = useNuxtApp()

// const data = ref<IIndexResponse | null>()
// useCustomFetch<IIndexResponse>('/api/page/index').then((res) => {
//     data.value = res.data.value
// })

const { data } = await useCustomFetch<IIndexResponse>('/api/page/index')

// console.log('🚀 ~ file: HomeMain.vue:116 ~ data:', data)

const { data: companyInfo } = await useCustomFetch<IAboutInfoResponse>('/api/page/about', {
    params: {
        type: 1,
    },
})
</script>

<style lang="scss" scoped>
.tle-line {
    position: relative;
    padding: 0 20px;

    &::after,
    &::before {
        content: '';
        width: 70px;
        height: 1px;
        background-color: #ccc;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    &::before {
        right: 100%;
    }

    &::after {
        left: 100%;
    }
}

.swp-box {
    position: relative;
    --swiper-navigation-size: 20px;
    --swiper-theme-color: var(--co-main-color);

    .swiper-button-next {
        right: -45px;
        width: 35px;
        height: 35px;
        border: 1px solid var(--swiper-theme-color);
    }

    .swiper-button-prev {
        left: -45px;
        width: 35px;
        height: 35px;
        border: 1px solid var(--swiper-theme-color);
    }
}

.banner-link {
    display: block;
    width: 100%;
    padding-bottom: 75%;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;

    >img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .cover {
        width: 0;
        transition: all .3s ease-out;

        span {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-250px, -50%);
            transition: all .6s ease-out;
            white-space: nowrap;
        }
    }

    &:hover {

        .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            // background-color: rgba(71, 204, 173, .5);
            transition: all .3s ease-out;

            --color: rgb(from var(--co-main-color) r g b / 50%);
            background-color: var(--color);
            // background-color: color-mix(in oklch, var(--co-main-color), transparent 60%);

            span {
                transform: translate(-50%, -50%);
                padding: 5px 20px;
                color: #fff;
                font-size: 16px;
                border: 2px solid #fff;
                transition: all .6s ease-out;
            }
        }
    }

}

.goods-dl {
    border: 1px solid #fff;

    dd {
        :deep(a) {
            display: block;
            line-height: 56px;
            padding: 12px 4px;
            // border-bottom: 1px dashed #fff;
            border: 2px solid transparent;
            color: #fff;
            text-align: center;
            font-size: 22px;
            font-weight: bold;

            &:hover {
                // border-color: #389f87;
                border-color: var(--co-main-color);
                color: var(--co-main-color);
                background-color: #fff;
            }

        }

        +dd {
            border-top: 1px dashed #fff;
        }
    }
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 5px;
}

.link {
    :deep(img) {
        transition: all 0.3s;

        &:hover {
            transform: scale(1.08);

        }
    }
}

// .link-a {
//     &:hover {
//         color: var(--co-main-color);
//     }
// }

.mien-list {
    box-shadow: 0 0 5px #ddd;

    .n1 {
        flex-direction: row-reverse;

        .mien-text {
            &::after {
                right: unset;
                left: 100%;
                border-color: transparent;
                border-left-color: #f2f2f2;
            }
        }
    }
}

.mien-text {
    background-color: #f2f2f2;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .link {
        display: block;
        padding: 4px 40px;
        border-radius: 20px;
        border: 1px solid var(--co-main-color);
        color: #666;
        font-size: 20px;
        transition: all .5s ease-out;

        &:hover {
            color: #fff;
            background-color: var(--co-main-color);
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 20%;
        right: 100%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-right-color: #f2f2f2;
    }
}

.mien-img {
    :deep(img) {
        transition: all .5s ease-out;

        &:hover {
            transform: scale(1.05);
        }
    }

}

.com-translate {
    transform: translate(-16px, 16px);
}

.com-left::before {
    display: block;
    content: " ";
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 5px solid #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}

.com-left::after {
    display: block;
    content: " ";
    width: 40px;
    height: 40px;
    border-left: 5px solid #fff;
    border-bottom: 5px solid #fff;
    position: absolute;
    bottom: -28px;
    left: -32px;
}

.com-cont {
    color: #fff !important;
    line-height: 1.8;

    :deep(*) {
        color: inherit !important;
    }

    +.link {
        border: 1px solid #fff;
        padding: 4px 20px;
        margin-top: 20px;
        display: inline-block;
        transition: all .5s;

        &:hover {
            color: var(--co-main-color);
            background-color: #fff;
        }
    }
}

.news-list {
    grid-template-columns: repeat(2, 1fr);

    .news-link {
        &:hover {
            box-shadow: 0 0 10px #ddd;
        }

    }

    .intro {
        font-size: 14px;
        line-height: 24px;
        height: 48px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;

    }
}

.news-more {
    border: 1px solid var(--co-main-color);
    padding: 7px 30px;
    font-size: 14px;
    border-radius: 20px;

    &:hover {
        color: #fff;
        background-color: var(--co-main-color);
    }
}
</style>
