import s from "./index.module.css"

function Balance() {

  return (
<section className={s.section}>
<article>Доходы за всё время <span>603000</span></article>
<article>Расходы за всё время <span className={s.span__expenses }>592000</span></article>
<article className={s.item3}> Итог <span>+11000</span></article>
</section>
  )
}

export default Balance;