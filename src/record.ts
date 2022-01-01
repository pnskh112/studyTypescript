export {};

// record型は二つのGenerics型の引数を受け取る特殊な型

// Record<K, T>

type Prefectures = "Tokyo" | "Chiba" | "Tottori" | "Shiga";

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    // あくまで例ですm(_ _)m
    Tokyo: { kanji_name: "東京", confirmed_cases: 100 },
    Chiba: { kanji_name: "千葉", confirmed_cases: 20 },
    Tottori: { kanji_name: "鳥取", confirmed_cases: 2 },
    Shiga: { kanji_name: "滋賀", confirmed_cases: 13 },
};

for (const data of Object.entries(covid19Japan))
{
    console.log(data);
}
