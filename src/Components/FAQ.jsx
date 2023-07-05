import React from 'react'

export default function FAQ() {
  return (
    <>
      <div className="container border mt-4 mb-4">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-md-4 d-flex justify-content-center">
            <h3>Have a query? Let us help you</h3>
          </div>
          <div className="col-md-8">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    How do I know my donations are safe & will go towards animal care?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Sarvoham is a registered organization with the License no. BTM-04-00027/2017-18. You can also visit our shelter any day between 11-4pm and witness what difference your donations are making and how they are being utilized. We know how much faith it takes for you to trust us with your hard-earned resources and we fulfil the responsibility of serving animals with sincerity and ethical uprightness.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Are the donations to Sarvoham tax-deductible?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Yes, all donations to Sarvoham from within India are tax-exempted under section 80G.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  How do I get a 80G tax-receipt for my donations?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">You will automatically get a tax-receipt for each of your donation. Please make sure you enter the PAN number while donating. You can also write to us at donation@sarvoham.org to receive a tax-receipt for your donation.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Can I make a donation in memory of a loved one?
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Memorializing a loved one by donating to the welfare of animals in need is truly a thoughtful gesture. You can click here to donate in the memory of a loved one.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  How do I get a tax-receipt if I am not a resident of India?
                  </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Currently, Sarvoham is registered to provide tax exemption to citizens of India only. However, we are in the process of applying for the same.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
