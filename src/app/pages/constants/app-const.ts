// 定数にはクラスをつけてまとめるべき。
// というのも全てまとめると探すのもめんどくさいし、テストもしにくい？
// staticは静的プロパティを表す。そして読み取り専用に用いる。
export class AppConst {
  static readonly STRAGE_KEY_USER = 'USER'
  // しかも、staticは、thisで呼べない！
  // ただ、以下のようにすれば、クラス内で呼べるようになる。
  // let sample1 = AppConst.STRAGE_KEY_USER;
}

// こんな感じ！インスタンス化しなくても、staticは使える！！！
// 基本変わることのないクラスが持つ固有の値だからこれができて、インスタンスごとに値が変わるものではない！！
//const sample = AppConst.STRAGE_KEY_USER;
