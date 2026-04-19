// ===== 英検4級 単語データ（約500語） =====
const words = [
    // --- 動詞 ---
    { english: "study", japanese: "勉強する" },
    { english: "teach", japanese: "教える" },
    { english: "learn", japanese: "学ぶ" },
    { english: "know", japanese: "知っている" },
    { english: "think", japanese: "思う" },
    { english: "believe", japanese: "信じる" },
    { english: "hope", japanese: "望む" },
    { english: "wish", japanese: "願う" },
    { english: "want", japanese: "欲しい" },
    { english: "need", japanese: "必要とする" },
    { english: "like", japanese: "好む" },
    { english: "love", japanese: "愛する" },
    { english: "enjoy", japanese: "楽しむ" },
    { english: "start", japanese: "始める" },
    { english: "begin", japanese: "始まる" },
    { english: "finish", japanese: "終える" },
    { english: "stop", japanese: "止まる" },
    { english: "try", japanese: "試す" },
    { english: "use", japanese: "使う" },
    { english: "make", japanese: "作る" },
    { english: "build", japanese: "建てる" },
    { english: "break", japanese: "壊す" },
    { english: "open", japanese: "開ける" },
    { english: "close", japanese: "閉める" },
    { english: "turn", japanese: "回す" },
    { english: "change", japanese: "変える" },
    { english: "grow", japanese: "育つ" },
    { english: "become", japanese: "〜になる" },
    { english: "feel", japanese: "感じる" },
    { english: "hear", japanese: "聞こえる" },
    { english: "listen", japanese: "聴く" },
    { english: "see", japanese: "見える" },
    { english: "watch", japanese: "見る" },
    { english: "look", japanese: "見る・目を向ける" },
    { english: "find", japanese: "見つける" },
    { english: "lose", japanese: "失う" },
    { english: "get", japanese: "得る" },
    { english: "give", japanese: "与える" },
    { english: "take", japanese: "取る" },
    { english: "bring", japanese: "持ってくる" },
    { english: "carry", japanese: "運ぶ" },
    { english: "send", japanese: "送る" },
    { english: "receive", japanese: "受け取る" },
    { english: "buy", japanese: "買う" },
    { english: "sell", japanese: "売る" },
    { english: "pay", japanese: "払う" },
    { english: "spend", japanese: "使う・過ごす" },
    { english: "save", japanese: "救う・貯める" },
    { english: "help", japanese: "助ける" },
    { english: "show", japanese: "見せる" },
    { english: "tell", japanese: "伝える" },
    { english: "say", japanese: "言う" },
    { english: "speak", japanese: "話す" },
    { english: "talk", japanese: "話す・おしゃべりする" },
    { english: "ask", japanese: "尋ねる" },
    { english: "answer", japanese: "答える" },
    { english: "read", japanese: "読む" },
    { english: "write", japanese: "書く" },
    { english: "draw", japanese: "描く" },
    { english: "sing", japanese: "歌う" },
    { english: "dance", japanese: "踊る" },
    { english: "play", japanese: "遊ぶ・演奏する" },
    { english: "run", japanese: "走る" },
    { english: "walk", japanese: "歩く" },
    { english: "swim", japanese: "泳ぐ" },
    { english: "fly", japanese: "飛ぶ" },
    { english: "jump", japanese: "跳ぶ" },
    { english: "climb", japanese: "登る" },
    { english: "sit", japanese: "座る" },
    { english: "stand", japanese: "立つ" },
    { english: "fall", japanese: "落ちる" },
    { english: "catch", japanese: "捕まえる" },
    { english: "throw", japanese: "投げる" },
    { english: "hold", japanese: "持つ・つかむ" },
    { english: "cut", japanese: "切る" },
    { english: "cook", japanese: "料理する" },
    { english: "eat", japanese: "食べる" },
    { english: "drink", japanese: "飲む" },
    { english: "sleep", japanese: "眠る" },
    { english: "wake", japanese: "起きる" },
    { english: "wash", japanese: "洗う" },
    { english: "clean", japanese: "掃除する" },
    { english: "wear", japanese: "着る" },
    { english: "choose", japanese: "選ぶ" },
    { english: "decide", japanese: "決める" },
    { english: "plan", japanese: "計画する" },
    { english: "remember", japanese: "覚えている" },
    { english: "forget", japanese: "忘れる" },
    { english: "understand", japanese: "理解する" },
    { english: "explain", japanese: "説明する" },
    { english: "happen", japanese: "起こる" },
    { english: "arrive", japanese: "到着する" },
    { english: "leave", japanese: "去る・出発する" },
    { english: "return", japanese: "戻る" },
    { english: "visit", japanese: "訪問する" },
    { english: "travel", japanese: "旅行する" },
    { english: "stay", japanese: "滞在する" },
    { english: "live", japanese: "住む・生きる" },
    { english: "move", japanese: "動く・引っ越す" },
    { english: "drive", japanese: "運転する" },
    { english: "ride", japanese: "乗る" },
    { english: "wait", japanese: "待つ" },
    { english: "meet", japanese: "会う" },
    { english: "join", japanese: "参加する" },
    { english: "invite", japanese: "招待する" },
    { english: "follow", japanese: "ついて行く" },
    { english: "win", japanese: "勝つ" },
    { english: "fight", japanese: "戦う" },
    { english: "call", japanese: "呼ぶ・電話する" },
    { english: "count", japanese: "数える" },
    { english: "practice", japanese: "練習する" },
    { english: "prepare", japanese: "準備する" },
    { english: "collect", japanese: "集める" },
    { english: "share", japanese: "分け合う" },
    { english: "pass", japanese: "通る・渡す" },
    { english: "cross", japanese: "横切る" },
    { english: "enter", japanese: "入る" },
    { english: "reach", japanese: "届く・到達する" },
    { english: "miss", japanese: "逃す・寂しく思う" },
    { english: "hurry", japanese: "急ぐ" },
    { english: "worry", japanese: "心配する" },
    { english: "agree", japanese: "賛成する" },
    { english: "imagine", japanese: "想像する" },
    { english: "care", japanese: "気にかける" },
    { english: "die", japanese: "死ぬ" },
    { english: "seem", japanese: "〜のようだ" },
    { english: "continue", japanese: "続ける" },
    { english: "discover", japanese: "発見する" },
    { english: "protect", japanese: "守る" },
    { english: "develop", japanese: "発展させる" },
    { english: "produce", japanese: "生産する" },
    { english: "suggest", japanese: "提案する" },
    { english: "improve", japanese: "改善する" },
    { english: "include", japanese: "含む" },
    { english: "belong", japanese: "属する" },
    { english: "appear", japanese: "現れる" },
    { english: "disappear", japanese: "消える" },
    { english: "fill", japanese: "満たす" },
    { english: "push", japanese: "押す" },
    { english: "pull", japanese: "引く" },
    { english: "hit", japanese: "打つ" },
    { english: "touch", japanese: "触る" },
    { english: "pick", japanese: "拾う・選ぶ" },
    { english: "hang", japanese: "掛ける" },
    { english: "drop", japanese: "落とす" },
    { english: "raise", japanese: "上げる" },
    { english: "fix", japanese: "修理する" },

    // --- 名詞 ---
    { english: "school", japanese: "学校" },
    { english: "class", japanese: "授業・クラス" },
    { english: "lesson", japanese: "レッスン・授業" },
    { english: "test", japanese: "テスト" },
    { english: "homework", japanese: "宿題" },
    { english: "student", japanese: "生徒" },
    { english: "teacher", japanese: "先生" },
    { english: "friend", japanese: "友達" },
    { english: "family", japanese: "家族" },
    { english: "father", japanese: "父" },
    { english: "mother", japanese: "母" },
    { english: "brother", japanese: "兄弟" },
    { english: "sister", japanese: "姉妹" },
    { english: "parent", japanese: "親" },
    { english: "child", japanese: "子ども" },
    { english: "baby", japanese: "赤ちゃん" },
    { english: "boy", japanese: "少年" },
    { english: "girl", japanese: "少女" },
    { english: "man", japanese: "男性" },
    { english: "woman", japanese: "女性" },
    { english: "people", japanese: "人々" },
    { english: "person", japanese: "人" },
    { english: "name", japanese: "名前" },
    { english: "age", japanese: "年齢" },
    { english: "birthday", japanese: "誕生日" },
    { english: "life", japanese: "人生・生活" },
    { english: "world", japanese: "世界" },
    { english: "country", japanese: "国" },
    { english: "city", japanese: "市・都市" },
    { english: "town", japanese: "町" },
    { english: "village", japanese: "村" },
    { english: "place", japanese: "場所" },
    { english: "house", japanese: "家" },
    { english: "home", japanese: "家庭・自宅" },
    { english: "room", japanese: "部屋" },
    { english: "door", japanese: "ドア" },
    { english: "window", japanese: "窓" },
    { english: "wall", japanese: "壁" },
    { english: "floor", japanese: "床" },
    { english: "kitchen", japanese: "台所" },
    { english: "garden", japanese: "庭" },
    { english: "park", japanese: "公園" },
    { english: "street", japanese: "通り" },
    { english: "road", japanese: "道" },
    { english: "bridge", japanese: "橋" },
    { english: "station", japanese: "駅" },
    { english: "airport", japanese: "空港" },
    { english: "hospital", japanese: "病院" },
    { english: "library", japanese: "図書館" },
    { english: "museum", japanese: "博物館" },
    { english: "store", japanese: "店" },
    { english: "shop", japanese: "店・買い物する" },
    { english: "restaurant", japanese: "レストラン" },
    { english: "hotel", japanese: "ホテル" },
    { english: "office", japanese: "事務所" },
    { english: "building", japanese: "建物" },
    { english: "factory", japanese: "工場" },
    { english: "church", japanese: "教会" },
    { english: "farm", japanese: "農場" },
    { english: "mountain", japanese: "山" },
    { english: "river", japanese: "川" },
    { english: "lake", japanese: "湖" },
    { english: "sea", japanese: "海" },
    { english: "ocean", japanese: "大洋" },
    { english: "beach", japanese: "浜辺" },
    { english: "island", japanese: "島" },
    { english: "forest", japanese: "森" },
    { english: "field", japanese: "野原" },
    { english: "sky", japanese: "空" },
    { english: "sun", japanese: "太陽" },
    { english: "moon", japanese: "月" },
    { english: "star", japanese: "星" },
    { english: "cloud", japanese: "雲" },
    { english: "rain", japanese: "雨" },
    { english: "snow", japanese: "雪" },
    { english: "wind", japanese: "風" },
    { english: "weather", japanese: "天気" },
    { english: "season", japanese: "季節" },
    { english: "spring", japanese: "春" },
    { english: "summer", japanese: "夏" },
    { english: "autumn", japanese: "秋" },
    { english: "winter", japanese: "冬" },
    { english: "morning", japanese: "朝" },
    { english: "afternoon", japanese: "午後" },
    { english: "evening", japanese: "夕方" },
    { english: "night", japanese: "夜" },
    { english: "week", japanese: "週" },
    { english: "month", japanese: "月" },
    { english: "year", japanese: "年" },
    { english: "time", japanese: "時間" },
    { english: "hour", japanese: "時間（1時間）" },
    { english: "minute", japanese: "分" },
    { english: "breakfast", japanese: "朝食" },
    { english: "lunch", japanese: "昼食" },
    { english: "dinner", japanese: "夕食" },
    { english: "food", japanese: "食べ物" },
    { english: "meal", japanese: "食事" },
    { english: "rice", japanese: "ご飯・米" },
    { english: "bread", japanese: "パン" },
    { english: "meat", japanese: "肉" },
    { english: "fish", japanese: "魚" },
    { english: "egg", japanese: "卵" },
    { english: "vegetable", japanese: "野菜" },
    { english: "fruit", japanese: "果物" },
    { english: "milk", japanese: "牛乳" },
    { english: "water", japanese: "水" },
    { english: "tea", japanese: "お茶" },
    { english: "coffee", japanese: "コーヒー" },
    { english: "sugar", japanese: "砂糖" },
    { english: "salt", japanese: "塩" },
    { english: "cake", japanese: "ケーキ" },
    { english: "money", japanese: "お金" },
    { english: "price", japanese: "値段" },
    { english: "number", japanese: "数・番号" },
    { english: "letter", japanese: "手紙・文字" },
    { english: "word", japanese: "単語" },
    { english: "language", japanese: "言語" },
    { english: "math", japanese: "数学" },
    { english: "science", japanese: "科学" },
    { english: "history", japanese: "歴史" },
    { english: "music", japanese: "音楽" },
    { english: "art", japanese: "芸術・美術" },
    { english: "sport", japanese: "スポーツ" },
    { english: "game", japanese: "ゲーム・試合" },
    { english: "movie", japanese: "映画" },
    { english: "book", japanese: "本" },
    { english: "newspaper", japanese: "新聞" },
    { english: "magazine", japanese: "雑誌" },
    { english: "picture", japanese: "絵・写真" },
    { english: "photo", japanese: "写真" },
    { english: "computer", japanese: "コンピュータ" },
    { english: "phone", japanese: "電話" },
    { english: "camera", japanese: "カメラ" },
    { english: "car", japanese: "車" },
    { english: "bus", japanese: "バス" },
    { english: "train", japanese: "電車" },
    { english: "plane", japanese: "飛行機" },
    { english: "bike", japanese: "自転車" },
    { english: "boat", japanese: "ボート" },
    { english: "ship", japanese: "船" },
    { english: "ticket", japanese: "切符" },
    { english: "bag", japanese: "かばん" },
    { english: "box", japanese: "箱" },
    { english: "pen", japanese: "ペン" },
    { english: "pencil", japanese: "鉛筆" },
    { english: "paper", japanese: "紙" },
    { english: "desk", japanese: "机" },
    { english: "chair", japanese: "椅子" },
    { english: "table", japanese: "テーブル" },
    { english: "bed", japanese: "ベッド" },
    { english: "clock", japanese: "時計" },
    { english: "wristwatch", japanese: "腕時計" },
    { english: "key", japanese: "鍵" },
    { english: "map", japanese: "地図" },
    { english: "umbrella", japanese: "傘" },
    { english: "hat", japanese: "帽子" },
    { english: "shirt", japanese: "シャツ" },
    { english: "shoes", japanese: "靴" },
    { english: "coat", japanese: "コート" },
    { english: "animal", japanese: "動物" },
    { english: "dog", japanese: "犬" },
    { english: "cat", japanese: "猫" },
    { english: "bird", japanese: "鳥" },
    { english: "horse", japanese: "馬" },
    { english: "bear", japanese: "クマ" },
    { english: "tree", japanese: "木" },
    { english: "flower", japanese: "花" },
    { english: "grass", japanese: "草" },
    { english: "leaf", japanese: "葉" },
    { english: "idea", japanese: "考え" },
    { english: "question", japanese: "質問" },
    { english: "problem", japanese: "問題" },
    { english: "example", japanese: "例" },
    { english: "story", japanese: "物語" },
    { english: "news", japanese: "ニュース" },
    { english: "information", japanese: "情報" },
    { english: "culture", japanese: "文化" },
    { english: "nature", japanese: "自然" },
    { english: "health", japanese: "健康" },
    { english: "heart", japanese: "心・心臓" },
    { english: "voice", japanese: "声" },
    { english: "sound", japanese: "音" },
    { english: "experience", japanese: "経験" },
    { english: "future", japanese: "未来" },
    { english: "dream", japanese: "夢" },
    { english: "rule", japanese: "ルール" },
    { english: "group", japanese: "グループ" },
    { english: "team", japanese: "チーム" },
    { english: "member", japanese: "メンバー" },
    { english: "part", japanese: "部分" },
    { english: "kind", japanese: "種類・親切な" },
    { english: "type", japanese: "タイプ・種類" },
    { english: "way", japanese: "方法・道" },
    { english: "end", japanese: "終わり" },
    { english: "side", japanese: "側" },
    { english: "corner", japanese: "角" },
    { english: "center", japanese: "中心" },
    { english: "point", japanese: "点・ポイント" },
    { english: "line", japanese: "線・列" },
    { english: "power", japanese: "力" },
    { english: "energy", japanese: "エネルギー" },
    { english: "light", japanese: "光・明かり" },
    { english: "fire", japanese: "火" },
    { english: "earth", japanese: "地球・土" },
    { english: "air", japanese: "空気" },
    { english: "reason", japanese: "理由" },
    { english: "chance", japanese: "機会" },
    { english: "fact", japanese: "事実" },
    { english: "truth", japanese: "真実" },
    { english: "project", japanese: "プロジェクト" },
    { english: "event", japanese: "行事" },
    { english: "festival", japanese: "祭り" },
    { english: "holiday", japanese: "休日" },
    { english: "vacation", japanese: "休暇" },
    { english: "trip", japanese: "旅行" },
    { english: "gift", japanese: "贈り物" },
    { english: "prize", japanese: "賞" },
    { english: "mistake", japanese: "間違い" },
    { english: "difference", japanese: "違い" },
    { english: "meaning", japanese: "意味" },
    { english: "opinion", japanese: "意見" },
    { english: "feeling", japanese: "気持ち" },
    { english: "interest", japanese: "興味" },
    { english: "attention", japanese: "注意" },
    { english: "effort", japanese: "努力" },
    { english: "success", japanese: "成功" },
    { english: "trouble", japanese: "困難・問題" },
    { english: "accident", japanese: "事故" },
    { english: "century", japanese: "世紀" },
    { english: "society", japanese: "社会" },
    { english: "environment", japanese: "環境" },
    { english: "temperature", japanese: "温度" },
    { english: "degree", japanese: "度" },
    { english: "subject", japanese: "教科・主題" },
    { english: "speech", japanese: "スピーチ" },
    { english: "sign", japanese: "標識・印" },
    { english: "symbol", japanese: "シンボル" },
    { english: "tradition", japanese: "伝統" },
    { english: "technology", japanese: "技術" },

    // --- 形容詞 ---
    { english: "big", japanese: "大きい" },
    { english: "small", japanese: "小さい" },
    { english: "large", japanese: "大きい・広い" },
    { english: "long", japanese: "長い" },
    { english: "short", japanese: "短い・低い" },
    { english: "tall", japanese: "背が高い" },
    { english: "high", japanese: "高い" },
    { english: "low", japanese: "低い" },
    { english: "wide", japanese: "広い" },
    { english: "deep", japanese: "深い" },
    { english: "heavy", japanese: "重い" },
    { english: "fast", japanese: "速い" },
    { english: "slow", japanese: "遅い" },
    { english: "early", japanese: "早い" },
    { english: "late", japanese: "遅い・遅れた" },
    { english: "new", japanese: "新しい" },
    { english: "old", japanese: "古い・年を取った" },
    { english: "young", japanese: "若い" },
    { english: "good", japanese: "良い" },
    { english: "bad", japanese: "悪い" },
    { english: "great", japanese: "素晴らしい" },
    { english: "fine", japanese: "元気な・すばらしい" },
    { english: "nice", japanese: "すてきな" },
    { english: "beautiful", japanese: "美しい" },
    { english: "pretty", japanese: "きれいな" },
    { english: "cute", japanese: "かわいい" },
    { english: "cool", japanese: "涼しい・かっこいい" },
    { english: "warm", japanese: "暖かい" },
    { english: "hot", japanese: "暑い・熱い" },
    { english: "cold", japanese: "寒い・冷たい" },
    { english: "bright", japanese: "明るい" },
    { english: "dark", japanese: "暗い" },
    { english: "rich", japanese: "裕福な" },
    { english: "poor", japanese: "貧しい" },
    { english: "strong", japanese: "強い" },
    { english: "weak", japanese: "弱い" },
    { english: "hard", japanese: "難しい・硬い" },
    { english: "soft", japanese: "柔らかい" },
    { english: "easy", japanese: "簡単な" },
    { english: "difficult", japanese: "難しい" },
    { english: "busy", japanese: "忙しい" },
    { english: "free", japanese: "自由な・無料の" },
    { english: "full", japanese: "いっぱいの" },
    { english: "empty", japanese: "空の" },
    { english: "hungry", japanese: "空腹な" },
    { english: "thirsty", japanese: "のどが渇いた" },
    { english: "tired", japanese: "疲れた" },
    { english: "sick", japanese: "病気の" },
    { english: "healthy", japanese: "健康な" },
    { english: "safe", japanese: "安全な" },
    { english: "dangerous", japanese: "危険な" },
    { english: "important", japanese: "重要な" },
    { english: "famous", japanese: "有名な" },
    { english: "popular", japanese: "人気のある" },
    { english: "special", japanese: "特別な" },
    { english: "different", japanese: "異なる" },
    { english: "same", japanese: "同じ" },
    { english: "foreign", japanese: "外国の" },
    { english: "many", japanese: "たくさんの" },
    { english: "few", japanese: "少しの" },
    { english: "sure", japanese: "確信して" },
    { english: "ready", japanese: "準備ができた" },
    { english: "glad", japanese: "うれしい" },
    { english: "happy", japanese: "幸せな" },
    { english: "sad", japanese: "悲しい" },
    { english: "angry", japanese: "怒った" },
    { english: "afraid", japanese: "恐れて" },
    { english: "surprised", japanese: "驚いた" },
    { english: "worried", japanese: "心配した" },
    { english: "excited", japanese: "興奮した" },
    { english: "interested", japanese: "興味がある" },
    { english: "bored", japanese: "退屈した" },
    { english: "lonely", japanese: "寂しい" },
    { english: "gentle", japanese: "優しい" },
    { english: "careful", japanese: "注意深い" },
    { english: "serious", japanese: "真剣な" },
    { english: "funny", japanese: "おもしろい" },
    { english: "strange", japanese: "不思議な" },
    { english: "wonderful", japanese: "すばらしい" },
    { english: "terrible", japanese: "ひどい" },
    { english: "possible", japanese: "可能な" },
    { english: "impossible", japanese: "不可能な" },
    { english: "necessary", japanese: "必要な" },
    { english: "useful", japanese: "役に立つ" },
    { english: "quiet", japanese: "静かな" },
    { english: "loud", japanese: "うるさい" },
    { english: "fresh", japanese: "新鮮な" },
    { english: "simple", japanese: "単純な" },
    { english: "brave", japanese: "勇敢な" },
    { english: "proud", japanese: "誇りに思う" },
    { english: "lucky", japanese: "幸運な" },
    { english: "comfortable", japanese: "快適な" },
    { english: "expensive", japanese: "高価な" },
    { english: "cheap", japanese: "安い" },
    { english: "delicious", japanese: "おいしい" },
    { english: "correct", japanese: "正しい" },
    { english: "wrong", japanese: "間違った" },
    { english: "real", japanese: "本当の" },
    { english: "national", japanese: "国の" },
    { english: "local", japanese: "地元の" },
    { english: "natural", japanese: "自然の" },
    { english: "traditional", japanese: "伝統的な" },
    { english: "modern", japanese: "現代の" },
    { english: "international", japanese: "国際的な" },
    { english: "own", japanese: "自分自身の" },
    { english: "common", japanese: "普通の" },
    { english: "main", japanese: "主な" },
    { english: "whole", japanese: "全体の" },

    // --- 副詞・その他 ---
    { english: "very", japanese: "とても" },
    { english: "really", japanese: "本当に" },
    { english: "quite", japanese: "かなり" },
    { english: "too", japanese: "〜すぎる・もまた" },
    { english: "also", japanese: "〜もまた" },
    { english: "still", japanese: "まだ" },
    { english: "already", japanese: "もう・すでに" },
    { english: "yet", japanese: "まだ" },
    { english: "just", japanese: "ちょうど" },
    { english: "even", japanese: "〜でさえ" },
    { english: "only", japanese: "〜だけ" },
    { english: "almost", japanese: "ほとんど" },
    { english: "enough", japanese: "十分に" },
    { english: "always", japanese: "いつも" },
    { english: "usually", japanese: "ふつう" },
    { english: "often", japanese: "しばしば" },
    { english: "sometimes", japanese: "ときどき" },
    { english: "never", japanese: "決して〜ない" },
    { english: "again", japanese: "再び" },
    { english: "together", japanese: "一緒に" },
    { english: "alone", japanese: "一人で" },
    { english: "away", japanese: "離れて" },
    { english: "outside", japanese: "外に" },
    { english: "inside", japanese: "中に" },
    { english: "here", japanese: "ここに" },
    { english: "there", japanese: "そこに" },
    { english: "everywhere", japanese: "どこでも" },
    { english: "now", japanese: "今" },
    { english: "then", japanese: "そのとき" },
    { english: "soon", japanese: "すぐに" },
    { english: "later", japanese: "あとで" },
    { english: "ago", japanese: "〜前に" },
    { english: "before", japanese: "〜の前に" },
    { english: "after", japanese: "〜の後に" },
    { english: "during", japanese: "〜の間に" },
    { english: "since", japanese: "〜以来" },
    { english: "until", japanese: "〜まで" },
    { english: "while", japanese: "〜する間" },
    { english: "about", japanese: "〜について" },
    { english: "around", japanese: "〜の周りに" },
    { english: "across", japanese: "〜を横切って" },
    { english: "along", japanese: "〜に沿って" },
    { english: "through", japanese: "〜を通して" },
    { english: "between", japanese: "〜の間に" },
    { english: "among", japanese: "〜の中で" },
    { english: "against", japanese: "〜に対して" },
    { english: "toward", japanese: "〜の方へ" },
    { english: "above", japanese: "〜の上に" },
    { english: "below", japanese: "〜の下に" },
    { english: "beside", japanese: "〜のそばに" },
    { english: "behind", japanese: "〜の後ろに" },
    { english: "near", japanese: "〜の近くに" },
    { english: "far", japanese: "遠い" },
    { english: "over", japanese: "〜の上に" },
    { english: "under", japanese: "〜の下に" },
    { english: "because", japanese: "なぜなら" },
    { english: "however", japanese: "しかしながら" },
    { english: "maybe", japanese: "たぶん" },
    { english: "perhaps", japanese: "おそらく" },
    { english: "once", japanese: "一度・かつて" },
    { english: "twice", japanese: "二度" },
    { english: "forward", japanese: "前方へ" },
    { english: "instead", japanese: "代わりに" },
    { english: "especially", japanese: "特に" },
    { english: "finally", japanese: "ついに" },
    { english: "suddenly", japanese: "突然" },
    { english: "probably", japanese: "おそらく" },
    { english: "certainly", japanese: "確かに" },
    { english: "recently", japanese: "最近" },
    { english: "actually", japanese: "実は" },
    { english: "quickly", japanese: "すばやく" },
    { english: "slowly", japanese: "ゆっくり" },
    { english: "easily", japanese: "簡単に" },
    { english: "clearly", japanese: "はっきりと" },
    { english: "directly", japanese: "直接に" },
    { english: "exactly", japanese: "正確に" },
    { english: "completely", japanese: "完全に" },
    { english: "nearly", japanese: "ほぼ" },
    { english: "generally", japanese: "一般的に" },
    { english: "simply", japanese: "単純に" },
    { english: "herself", japanese: "彼女自身" },
    { english: "himself", japanese: "彼自身" },
    { english: "themselves", japanese: "彼ら自身" },
    { english: "itself", japanese: "それ自体" },
    { english: "tonight", japanese: "今夜" },
    { english: "tomorrow", japanese: "明日" },
    { english: "yesterday", japanese: "昨日" },
    { english: "today", japanese: "今日" },
    { english: "abroad", japanese: "海外へ" },
    { english: "else", japanese: "他に" },
    { english: "rather", japanese: "むしろ" },
    { english: "anyway", japanese: "とにかく" },
    { english: "whether", japanese: "〜かどうか" },
    { english: "although", japanese: "〜だけれども" },
    { english: "therefore", japanese: "したがって" },
    { english: "neither", japanese: "どちらも〜ない" },
    { english: "either", japanese: "どちらか" },
    { english: "billion", japanese: "10億" },
    { english: "million", japanese: "100万" },
    { english: "thousand", japanese: "千" },
    { english: "hundred", japanese: "百" },
    { english: "percent", japanese: "パーセント" },
    { english: "according", japanese: "〜によると" }
];

// ===== モンスターカードデータ =====
const monsterCards = [
    { id: 1, name: "リーフドラゴン", nameEn: "Leaf Dragon", description: "深い森に住む葉のドラゴン。翼は大きな木の葉でできている。", emoji: "🐉", element: "🍃", color1: "#2e7d32", color2: "#66bb6a" },
    { id: 2, name: "フォレストナイト", nameEn: "Forest Knight", description: "森を守る緑の騎士。木の剣と葉の盾を持つ。", emoji: "⚔️", element: "🌲", color1: "#1b5e20", color2: "#43a047" },
    { id: 3, name: "ウッドゴーレム", nameEn: "Wood Golem", description: "古い木から生まれた巨人。力はとても強い。", emoji: "🗿", element: "🌳", color1: "#5d4037", color2: "#8d6e63" },
    { id: 4, name: "モスフェアリー", nameEn: "Moss Fairy", description: "苔の森に住む小さな妖精。癒やしの力を持つ。", emoji: "🧚", element: "✨", color1: "#00897b", color2: "#4db6ac" },
    { id: 5, name: "ヴァインサーペント", nameEn: "Vine Serpent", description: "つるに化けた神秘の蛇。森の秘密を知っている。", emoji: "🐍", element: "🌿", color1: "#388e3c", color2: "#81c784" },
    { id: 6, name: "バークガーディアン", nameEn: "Bark Guardian", description: "樹皮の鎧を持つ守護者。森の入り口を守る。", emoji: "🛡️", element: "🌲", color1: "#4e342e", color2: "#795548" },
    { id: 7, name: "ペタルフェニックス", nameEn: "Petal Phoenix", description: "花びらの翼を持つ不死鳥。春になると復活する。", emoji: "🦅", element: "🌸", color1: "#c62828", color2: "#ef5350" },
    { id: 8, name: "ソーンビースト", nameEn: "Thorn Beast", description: "いばらに覆われた獣。触ると痛いが心は優しい。", emoji: "🦁", element: "🌹", color1: "#6a1b9a", color2: "#ab47bc" },
    { id: 9, name: "エンシェントトレント", nameEn: "Ancient Treant", description: "千年生きる古代の木人。森の長老と呼ばれる。", emoji: "🌳", element: "👁️", color1: "#33691e", color2: "#689f38" },
    { id: 10, name: "エメラルドキング", nameEn: "Emerald King", description: "エメラルドの冠を持つ森の王。全てのモンスターを統べる。", emoji: "👑", element: "💎", color1: "#00695c", color2: "#26a69a" }
];

// ===== ゲーム状態 =====
let gameState = {
    totalCorrect: 0,
    correctInSession: 0,
    askedIndices: [],
    collectedCards: [],
    nextCardThreshold: 50
};

let currentQuestion = null;
let isAnswering = false;
let audioCtx = null;
let soundEnabled = localStorage.getItem("sound") !== "off";

let roundQuestions = [];
let roundIndex = 0;
let roundCorrect = 0;
let roundTotal = 10;
let wrongInRound = [];
let isReviewMode = false;

// ===== 初期化 =====
function init() {
    loadState();
    updateTopDisplay();
    updateSoundButton();
}

// ===== localStorage =====
function saveState() {
    localStorage.setItem("eiken4_state", JSON.stringify(gameState));
}

function loadState() {
    const saved = localStorage.getItem("eiken4_state");
    if (saved) {
        const parsed = JSON.parse(saved);
        gameState.totalCorrect = parsed.totalCorrect || 0;
        gameState.correctInSession = parsed.correctInSession || 0;
        gameState.askedIndices = parsed.askedIndices || [];
        gameState.collectedCards = parsed.collectedCards || [];
        gameState.nextCardThreshold = parsed.nextCardThreshold || 50;
    }
}

// ===== 画面切り替え =====
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function showTop() {
    updateTopDisplay();
    showScreen("top-screen");
}

function updateTopDisplay() {
    document.getElementById("total-correct").textContent = gameState.totalCorrect;
    document.getElementById("card-count").innerHTML = gameState.collectedCards.length + "<small>/10</small>";
    const rareCards = gameState.collectedCards.filter(c => c.rarity === "rare" || c.rarity === "super-rare");
    document.getElementById("rare-count").innerHTML = rareCards.length + "<small>/5</small>";
}

// ===== 音ON/OFF =====
function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem("sound", soundEnabled ? "on" : "off");
    updateSoundButton();
}

function updateSoundButton() {
    const btn = document.getElementById("sound-toggle-btn");
    if (soundEnabled) {
        btn.textContent = "\uD83D\uDD0A 音をOFFにする";
        btn.classList.remove("sound-off");
    } else {
        btn.textContent = "\uD83D\uDD07 音をONにする";
        btn.classList.add("sound-off");
    }
}

// ===== 発音（Web Speech API） =====
function speakWord() {
    if (!currentQuestion) return;
    const utter = new SpeechSynthesisUtterance(currentQuestion.english);
    utter.lang = "en-US";
    speechSynthesis.speak(utter);
}

// ===== クイズ =====
function startQuiz() {
    isReviewMode = false;
    roundCorrect = 0;
    roundIndex = 0;
    wrongInRound = [];

    let pool = [];
    for (let i = 0; i < words.length; i++) {
        if (!gameState.askedIndices.includes(i)) {
            pool.push(i);
        }
    }
    if (pool.length === 0) {
        gameState.askedIndices = [];
        saveState();
        for (let i = 0; i < words.length; i++) {
            pool.push(i);
        }
    }

    shuffleArray(pool);
    roundQuestions = pool.slice(0, roundTotal);

    document.getElementById("round-total").textContent = roundTotal;
    updateQuizProgress();
    showScreen("quiz-screen");
    nextQuestion();
}

function startReview() {
    if (wrongInRound.length === 0) return;
    isReviewMode = true;
    roundCorrect = 0;
    roundIndex = 0;
    roundQuestions = wrongInRound.slice();
    wrongInRound = [];
    roundTotal = roundQuestions.length;

    document.getElementById("round-total").textContent = roundTotal;
    updateQuizProgress();
    showScreen("quiz-screen");
    nextQuestion();
}

function nextQuestion() {
    isAnswering = false;
    const overlay = document.getElementById("result-overlay");
    overlay.classList.add("hidden");

    if (roundIndex >= roundQuestions.length) {
        showRoundResult();
        return;
    }

    const randomIdx = roundQuestions[roundIndex];
    const correctWord = words[randomIdx];

    const wrongAnswers = [];
    while (wrongAnswers.length < 3) {
        const ri = Math.floor(Math.random() * words.length);
        if (ri !== randomIdx && !wrongAnswers.some(w => w.japanese === words[ri].japanese)) {
            wrongAnswers.push(words[ri]);
        }
    }

    const choices = [correctWord, ...wrongAnswers];
    shuffleArray(choices);

    currentQuestion = {
        wordIndex: randomIdx,
        correctAnswer: correctWord.japanese,
        english: correctWord.english
    };

    document.getElementById("quiz-word").textContent = correctWord.english;

    const choicesDiv = document.getElementById("quiz-choices");
    choicesDiv.innerHTML = "";
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice.japanese;
        btn.onclick = () => selectAnswer(btn, choice.japanese);
        choicesDiv.appendChild(btn);
    });

    updateQuizProgress();
}

function selectAnswer(btn, selected) {
    if (isAnswering) return;
    isAnswering = true;

    const allBtns = document.querySelectorAll(".choice-btn");
    allBtns.forEach(b => b.classList.add("disabled"));

    const isCorrect = selected === currentQuestion.correctAnswer;

    if (isCorrect) {
        btn.classList.add("correct");
        showResult(true);
        playCorrectSound();
        roundCorrect++;
        gameState.totalCorrect++;
        gameState.correctInSession++;
        if (!isReviewMode) {
            gameState.askedIndices.push(currentQuestion.wordIndex);
        }
        saveState();

        if (gameState.totalCorrect >= gameState.nextCardThreshold && gameState.collectedCards.length < 10) {
            roundIndex++;
            setTimeout(() => {
                giveCard();
            }, 1200);
            return;
        }
    } else {
        btn.classList.add("wrong");
        allBtns.forEach(b => {
            if (b.textContent === currentQuestion.correctAnswer) {
                b.classList.add("show-correct");
            }
        });
        showResult(false, currentQuestion.correctAnswer);
        playWrongSound();
        wrongInRound.push(currentQuestion.wordIndex);
    }

    roundIndex++;

    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

function showResult(correct, correctAnswer) {
    const overlay = document.getElementById("result-overlay");
    const mark = document.getElementById("result-mark");
    const text = document.getElementById("result-text");
    overlay.classList.remove("hidden");

    if (correct) {
        mark.textContent = "○";
        mark.className = "result-mark correct";
        text.textContent = "正解！";
        text.className = "result-text correct";
    } else {
        mark.textContent = "×";
        mark.className = "result-mark wrong";
        text.textContent = "正解: " + correctAnswer;
        text.className = "result-text wrong";
    }
}

function updateQuizProgress() {
    const fill = document.getElementById("quiz-progress-fill");
    const numEl = document.getElementById("round-question-num");
    const pct = roundQuestions.length > 0 ? Math.min((roundIndex / roundQuestions.length) * 100, 100) : 0;
    fill.style.width = pct + "%";
    numEl.textContent = Math.min(roundIndex + 1, roundQuestions.length);
}

// ===== ラウンド結果 =====
function showRoundResult() {
    const accuracy = roundQuestions.length > 0 ? Math.round((roundCorrect / roundQuestions.length) * 100) : 0;

    const emojiEl = document.getElementById("result-emoji-display");
    const titleEl = document.getElementById("result-title");
    const scoreEl = document.getElementById("round-score");
    const accEl = document.getElementById("round-accuracy");
    const reviewBtn = document.getElementById("review-btn");
    const nextBtn = document.getElementById("next-round-btn");

    if (accuracy === 100) {
        emojiEl.textContent = "🎉";
        titleEl.textContent = "パーフェクト！";
    } else if (accuracy >= 70) {
        emojiEl.textContent = "😊";
        titleEl.textContent = "おつかれさま！";
    } else {
        emojiEl.textContent = "💪";
        titleEl.textContent = "がんばろう！";
    }

    scoreEl.textContent = roundCorrect + " / " + roundQuestions.length + " 正解";
    accEl.textContent = "正答率 " + accuracy + "%";

    if (wrongInRound.length > 0) {
        reviewBtn.style.display = "";
        reviewBtn.textContent = "📝 まちがえた " + wrongInRound.length + " もんを復習";
    } else {
        reviewBtn.style.display = "none";
    }

    if (isReviewMode) {
        nextBtn.textContent = "🔄 あたらしい10もん";
    } else {
        nextBtn.textContent = "🔄 つぎの10もん";
    }

    showScreen("result-screen");
}

// ===== カードシステム =====
function giveCard() {
    const rarity = rollRarity();
    const availableIds = [];
    for (let i = 1; i <= 10; i++) {
        if (!gameState.collectedCards.some(c => c.id === i)) {
            availableIds.push(i);
        }
    }

    if (availableIds.length === 0) return;

    const cardId = availableIds[Math.floor(Math.random() * availableIds.length)];
    const cardData = monsterCards.find(c => c.id === cardId);

    const newCard = {
        id: cardData.id,
        rarity: rarity,
        obtainedAt: Date.now()
    };

    gameState.collectedCards.push(newCard);
    gameState.nextCardThreshold = gameState.totalCorrect + 50;
    saveState();

    showCardGetAnimation(cardData, rarity);
}

function rollRarity() {
    const r = Math.random() * 100;
    if (r < 5) return "super-rare";
    if (r < 20) return "rare";
    return "normal";
}

function showCardGetAnimation(cardData, rarity) {
    const screen = document.getElementById("card-get-screen");
    const titleEl = document.getElementById("card-get-title");
    const rarityEl = document.getElementById("card-get-rarity");
    const displayEl = document.getElementById("card-get-display");
    const nameEl = document.getElementById("card-get-name");
    const descEl = document.getElementById("card-get-desc");
    const particlesEl = document.getElementById("card-get-particles");

    titleEl.textContent = "カードGET！";

    if (rarity === "super-rare") {
        rarityEl.textContent = "★★★ SUPER RARE!! ★★★";
        rarityEl.className = "card-get-rarity super-rare";
        playRareSound(true);
        const lightDiv = document.createElement("div");
        lightDiv.className = "super-rare-light";
        lightDiv.id = "sr-light";
        screen.appendChild(lightDiv);
    } else if (rarity === "rare") {
        rarityEl.textContent = "★★ RARE! ★★";
        rarityEl.className = "card-get-rarity rare";
        playRareSound(false);
    } else {
        rarityEl.textContent = "★ NORMAL ★";
        rarityEl.className = "card-get-rarity normal";
        playCorrectSound();
    }

    displayEl.className = "card-get-display " + rarity;
    displayEl.textContent = cardData.emoji;
    nameEl.textContent = cardData.name;
    descEl.textContent = cardData.description;

    particlesEl.innerHTML = "";
    const colors = rarity === "super-rare"
        ? ["#9c27b0", "#e040fb", "#ea80fc", "#ce93d8", "#fff"]
        : rarity === "rare"
            ? ["#ffd54f", "#ffb300", "#fff176", "#ffe082", "#fff"]
            : ["#81c784", "#66bb6a", "#a5d6a7", "#c8e6c9", "#fff"];

    for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 40 + "%";
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDelay = Math.random() * 1 + "s";
        p.style.width = (Math.random() * 8 + 4) + "px";
        p.style.height = p.style.width;
        particlesEl.appendChild(p);
    }

    showScreen("card-get-screen");
}

function closeCardGet() {
    const light = document.getElementById("sr-light");
    if (light) light.remove();

    if (gameState.collectedCards.length >= 10) {
        showCongrats();
    } else {
        showScreen("quiz-screen");
        nextQuestion();
    }
}

// ===== コレクション =====
function showCollection() {
    const grid = document.getElementById("card-grid");
    grid.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const collected = gameState.collectedCards.find(c => c.id === i);
        const cardData = monsterCards.find(c => c.id === i);

        const card = document.createElement("div");

        if (collected) {
            card.className = "collection-card " + collected.rarity;
            card.innerHTML = `
                <div class="card-element">${cardData.element}</div>
                <div class="card-emoji">${cardData.emoji}</div>
                <div class="card-name">${cardData.name}</div>
                <div class="card-rarity-badge badge-${collected.rarity === "super-rare" ? "super-rare" : collected.rarity}">
                    ${collected.rarity === "super-rare" ? "超レア" : collected.rarity === "rare" ? "レア" : "ノーマル"}
                </div>
            `;
            card.onclick = () => showCardDetail(cardData, collected.rarity);
        } else {
            card.className = "collection-card empty";
            card.innerHTML = `
                <div class="card-empty-text">？</div>
                <div class="card-empty-label">No.${i}</div>
            `;
        }

        grid.appendChild(card);
    }

    showScreen("collection-screen");
}

function showCardDetail(cardData, rarity) {
    const modal = document.getElementById("card-detail-modal");
    const display = document.getElementById("detail-card-display");
    const nameEl = document.getElementById("detail-name");
    const rarityEl = document.getElementById("detail-rarity");
    const descEl = document.getElementById("detail-desc");

    display.className = "detail-card " + rarity;
    display.textContent = cardData.emoji;
    nameEl.textContent = cardData.name + " / " + cardData.nameEn;

    const rarityLabels = { normal: "★ ノーマル", rare: "★★ レア", "super-rare": "★★★ 超レア" };
    const rarityColors = { normal: "#43a047", rare: "#ff8f00", "super-rare": "#9c27b0" };
    rarityEl.textContent = rarityLabels[rarity];
    rarityEl.style.color = rarityColors[rarity];
    descEl.textContent = cardData.description;

    modal.classList.remove("hidden");
}

function closeCardDetail(e) {
    if (e && e.target !== document.getElementById("card-detail-modal")) return;
    document.getElementById("card-detail-modal").classList.add("hidden");
}

// ===== コンプリート =====
function showCongrats() {
    const cardsDiv = document.getElementById("congrats-cards");
    cardsDiv.innerHTML = "";

    gameState.collectedCards.forEach(c => {
        const cardData = monsterCards.find(m => m.id === c.id);
        const mini = document.createElement("div");
        mini.className = "congrats-mini-card " + c.rarity;
        mini.textContent = cardData.emoji;
        cardsDiv.appendChild(mini);
    });

    const confetti = document.getElementById("confetti-container");
    confetti.innerHTML = "";
    const colors = ["#f44336", "#e91e63", "#9c27b0", "#2196f3", "#4caf50", "#ffeb3b", "#ff9800", "#00bcd4"];
    for (let i = 0; i < 60; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "%";
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDelay = Math.random() * 2 + "s";
        c.style.animationDuration = (Math.random() * 2 + 2) + "s";
        const size = Math.random() * 8 + 6;
        c.style.width = size + "px";
        c.style.height = size + "px";
        c.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
        confetti.appendChild(c);
    }

    playCongratsSound();
    showScreen("congrats-screen");
}

function closeCongrats() {
    showTop();
}

// ===== リセット =====
function confirmReset() {
    document.getElementById("reset-modal").classList.remove("hidden");
}

function closeResetModal(e) {
    if (e && e.target !== document.getElementById("reset-modal")) return;
    document.getElementById("reset-modal").classList.add("hidden");
}

function resetProgress() {
    gameState = {
        totalCorrect: 0,
        correctInSession: 0,
        askedIndices: [],
        collectedCards: [],
        nextCardThreshold: 50
    };
    saveState();
    closeResetModal();
    updateTopDisplay();
}

// ===== サウンド =====
function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playCorrectSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = "sine";
        osc2.type = "sine";
        osc1.frequency.setValueAtTime(800, ctx.currentTime);
        osc2.frequency.setValueAtTime(1200, ctx.currentTime);

        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(ctx.currentTime);
        osc2.start(ctx.currentTime + 0.15);
        osc1.stop(ctx.currentTime + 0.3);
        osc2.stop(ctx.currentTime + 0.45);
    } catch (e) {}
}

function playWrongSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.4);

        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.4);
    } catch (e) {}
}

function playRareSound(isSuperRare) {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const notes = isSuperRare ? [523, 659, 784, 1047, 1319] : [523, 659, 784];
        const duration = isSuperRare ? 0.25 : 0.3;

        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = isSuperRare ? "triangle" : "sine";
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            gain.gain.setValueAtTime(0, ctx.currentTime + i * duration);
            gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + i * duration + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + (i + 1) * duration);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + i * duration);
            osc.stop(ctx.currentTime + (i + 1) * duration + 0.1);
        });
    } catch (e) {}
}

function playCongratsSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const melody = [523, 587, 659, 784, 659, 784, 1047];
        melody.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.2);
            gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.2 + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + (i + 1) * 0.2);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + i * 0.2);
            osc.stop(ctx.currentTime + (i + 1) * 0.2 + 0.1);
        });
    } catch (e) {}
}

// ===== ユーティリティ =====
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// ===== 起動 =====
init();
