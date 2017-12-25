import mermaid from 'mermaid'

mermaid.initialize({
  theme: 'forest',
  gantt: { axisFormatter: [
    ['%Y-%m-%d', (d) => {
      return d.getDay() === 1
    }]
  ] }
})
