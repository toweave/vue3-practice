export type RenderComponent = {
  renderData: [{ [key: string]: any }]
  eventHandler: EventHandlerCore | null
  emitter: Emitter
  parent?: RenderComponent | null
  child?: RenderComponent | null
  service?: serviceParams | null
  /**
   * object for store additional data
   */

  flowAdditions: {
    sysList: { id: string | number; val: string | number }[]
  }

  flowDialogOption: FlowDialogOption
  /**
   * helper for store local data
   */
  renderHelper: {
    /**
     * previous send event.
     */
    previousSendEvent?: CoEvent
    /**
     * search event included current render form search filters.
     * @property ctrl ref name
     * @value search event
     */
    searchEvent: {
      [key: string]: CoEvent
    }
    [key: string]: any
  }
  emits: ['open-form'] // form data

  [key: string]: any
  checkboxlist?: string[]
  /**
   * init template
   */

  init: (options: Option) => void

  flowClose: () => void
} & ComponentPublicInstance
