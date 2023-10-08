import React from 'react'

function Menu() {
  return (
    <div>

<ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full">
  <li>resume.pdf</li>
  <li>
    <details open>
      <summary>My Files</summary>
      <ul>
        <li>Project-final.psd</li>
        <li>Project-final-2.psd</li>
        <li>
          <details open>
            <summary>Images</summary>
            <ul>
              <li>Screenshot1.png</li>
              <li>Screenshot2.png</li>
              <li>
                <details open>
                  <summary>Others</summary>
                  <ul>
                    <li>Screenshot3.png</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li>reports-final-2.pdf</li>
</ul>






        
    </div>
  )
}

export default Menu