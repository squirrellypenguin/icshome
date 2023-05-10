<template>


  <b-card>
    <b-media no-body>
      <b-media-aside vertical-align="center">
        <b-img blank blank-color="#ccc" width="64" height="128" alt="placeholder"></b-img>
      </b-media-aside>

      <b-media-body>
        <h5 class="mt-0">From humble beginnings</h5>
        <p>
          This is a member-owned and operated business focused on the arts and not profits which was founded in 1991 by a group of talented Champlain Island crafters offering quirky and beautiful products in Vermont. The shop moved some before planting its flag on South Hero. 
        </p>
        <p class="mb-0">
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <b-media>
          <template #aside>
            <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0">Nested Media</h5>
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
          faucibus.
        </b-media>
      </b-media-body>
    </b-media>
  </b-card>

</template>
