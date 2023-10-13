type AccordionItemProps = { title: string; body?: string | null, id: string }

const AccordionItem = ({ title, body, id }: AccordionItemProps) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-${id}`}
          aria-expanded="true"
          aria-controls={`flush-${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`flush-${id}`}
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordion"
      >
        <div className="accordion-body">{body}</div>
      </div>
    </div>
  )
}

export default AccordionItem
