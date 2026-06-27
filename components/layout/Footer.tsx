export default function Footer() {
  return (
    <footer className="mt-32 border-t bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-semibold">施美玉名香祖舖</h3>
          <p className="mt-4 text-gray-600 leading-7">
            傳承250年的製香工藝，
            堅持天然原料與台灣製造。
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">快速連結</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/">首頁</a></li>
            <li><a href="/about">品牌故事</a></li>
            <li><a href="/products">商品</a></li>
            <li><a href="/contact">聯絡我們</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">聯絡資訊</h4>
          <p className="text-gray-600 leading-7">
            電話：02-xxxx-xxxx<br />
            Email：info@example.com<br />
            台灣
          </p>
        </div>

      </div>

      <div className="text-center py-6 text-gray-400 text-sm border-t">
        © 2026 SHI MEI YU
      </div>
    </footer>
  );
}
