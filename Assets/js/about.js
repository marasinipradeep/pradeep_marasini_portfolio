{/* <div class="row"><p class="mt-4">About Me</p></div><hr/>
               
<div class="row">
    <div class="col-6">
      <div class="mycontent-left">Full Stack Developer with a background in electronics and communication engineering utilising experience in embedded system and agile methodology. Awarded as “Best IT supporter” and is a strong communicator to work effectively with end-users and the team.

        Recently, earned a certificate in full stack development from
        University of Adelaide, with newly developed skills in HTML,
        CSS, Javascript, Node, Express, MySQL, MongoDB and
        responsive web design. Highly iInterested and passionate to learn
        and implement emerging web technologies . Can work under a
        pressure environment and fascinated to implement innovative
        ideas to real world application so that people can have better
        life.
      </div>
    </div>
    <div class="col-6">
      <div class="mycontent-right">
        <div class="row">
              <div class="col-4 boxDesign ">Residence</div>
              <div class="col-8 ">Australia</div>
          </div><hr/>
          <div class="row">
            <div class="col-4 boxDesign">Freelance</div>
            <div class="col-8">Available</div>
        </div><hr/>
        <div class="row">
            <div class="col-4 boxDesign">Address</div>
            <div class="col-8">South Australia, Adelaide</div>
        </div>
      </div>
    </div> */}
    function onAboutClicked(){
      var newParagraph = $("<p>")
      newParagraph.text("Full Stack Developer with a background in electronics and communication engineering utilising experience in embedded system and agile methodology. Awarded as “Best IT supporter” and is a strong communicator to work effectively with end-users and the team.Recently, earned a certificate in full stack development from University of Adelaide, with newly developed skills in HTML,CSS, Javascript, Node, Express, MySQL, MongoDB and responsive web design. Highly iInterested and passionate to learn and implement emerging web technologies . Can work under a pressure environment and fascinated to implement innovative ideas to real world application so that people can have better life.")
     $("#introduction").append(newParagraph)
    
    }


    $("#about").on("click",onAboutClicked)