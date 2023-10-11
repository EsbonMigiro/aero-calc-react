import React from 'react'

export function Menu() {
  return (
    <div>

<ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full">
  <li>
    <details open>
      <summary>
        My files
      </summary>
      <ul>
        <li>Final project</li>
        <li>project final</li>
        <li>
          <details open>
            <summary>
             Image
            </summary>
            <ul>
              <li>screen shot1</li>
              <li>
                screen shot 3
              </li>
              <li>
                <details open>
                  <summary>
                  others
                  </summary>
                  <ul>
                    <li>screen shoot 3</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li>final report</li>
</ul>

    </div>
  )
}
