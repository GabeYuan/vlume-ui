import { defineComponent } from 'vue'
import './card.scss'

export default defineComponent({
  name: 'VlCard',
  setup(props, ctx) {
    return () => <div class="vl-card">卡片测试aaa</div>
  }
})
