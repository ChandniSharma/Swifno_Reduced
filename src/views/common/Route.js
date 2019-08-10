import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as constants from '../../constants/Constant';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = "AIzaSyDPZ4WqbIthgfyC-Qo225_1Z-dU4UfLb2I";
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default class Route extends Component {

  constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: 37.3317876,
          longitude: -122.0054812,
        },
        {
          latitude: 37.771707,
          longitude: -122.4053769,
        },
      ],
    };

    this.mapView = null;
  }

  // Below code add pin on map when user click on it 
//   onMapPress = (e) => {
//     this.setState({
//       coordinates: [
//         ...this.state.coordinates,
//         e.nativeEvent.coordinate,
//       ],
//     });
//   }

render() {
  return (
      <View
          style={styles.container}
      >
          <MapView
               provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              initialRegion={{
                  latitude: 37.3317876,
                  longitude: -122.0054812,
                  // latitudeDelta: 0.05,
                  // longitudeDelta: 0.05,
                  latitudeDelta: 0.015,
                   longitudeDelta: 0.0121,
              }}
          >
              <Marker
                  pinColor={'green'}
                  coordinate={{ latitude: 37.3317876, longitude: -122.0054812 }}
              />
              <Marker
                  pinColor={'blue'}
                  coordinate={{ latitude: 37.771707, longitude: -122.4053769 }}
              />
              {/* {
                  this.state.navigationStarted
                      ? */}
                      <MapViewDirections
                          origin={{ latitude: 37.3317876, longitude: -122.0054812 }}
                          destination={{ latitude:37.771707, longitude: -122.4053769 }}
                          apikey={GOOGLE_MAPS_APIKEY} // Replace with your Google Maps Api Key
                          strokeWidth={3}
                          strokeColor="hotpink"
                          />
                      {/* : null
              } */}
          </MapView>
      </View>
  )
}

  render1() {
    return (
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE} 
        ref={c => this.mapView = c}
       // onPress={this.onMapPress}
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log(" Result is =====", result);
             // console.log('Duration: ${result.duration} min.')
            //   this.mapView.fitToCoordinates(result.coordinates, {
            //     edgePadding: {
            //       right: (width / 20),
            //       bottom: (height / 20),
            //       left: (width / 20),
            //       top: (height / 20),
            //     }
            //   });
            }}
            onError={(errorMessage) => {
               console.log('GOT AN ERROR ====Chandni ====',errorMessage );
            }}
          />
        )}
      </MapView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });






// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,Dimensions
// } from 'react-native';
// import MapView from 'react-native-maps';


// const mode = 'driving'; // 'walking';
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const SPACE = 0.01;
// const DEFAULT_PADDING = { top: 100, right: 100, bottom: 100, left: 100 };
// const { width, height } = Dimensions.get('window');
//  const GOOGLE_MAPS_APIKEY = "AIzaSyDPZ4WqbIthgfyC-Qo225_1Z-dU4UfLb2I";

 class RouteTry extends Component {

  constructor(props) {
    super(props);  
    this.mapRef = null;    
  }

  state = {    
    MARKERS : null,
    origin :'22.9962,72.5996',
    destination :'23.0134,72.5624',    
    destMarker : '',
    startMarker :'',
    imageloaded:false,
  }

  componentWillMount()
  {
    this.getRoutePoints(this.state.origin,this.state.destination);
  }

  /**
   * This method will give you JSON response with all location points between 2 location
   */
  getRoutePoints(origin,destination) {
    console.log("-----getRoutePoints-----")    
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyDPZ4WqbIthgfyC-Qo225_1Z-dU4UfLb2I&mode=${mode}`;
    console.log("URL -- >>" + url);

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.routes.length) {
          var cortemp = this.decode(responseJson.routes[0].overview_polyline.points) // definition below;
          var length = cortemp.length - 1;

          var tempMARKERS = []; 
          tempMARKERS.push(cortemp[0]) ;   //start origin        
          tempMARKERS.push(cortemp[length]); //only destination adding

          console.log("tempMARKERS : " + JSON.stringify(tempMARKERS));

          this.setState({
            coords: cortemp,            
            MARKERS:tempMARKERS,
            destMarker : cortemp[length],
            startMarker:cortemp[0],
          });

        }
      }).catch(e => { console.warn(e) });
  }

  /**
   * This method will transforms something like this geocFltrhVvDsEtA}ApSsVrDaEvAcBSYOS_@... to an array of coordinates
   */

  decode(t, e) {
    for (var n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5); u < t.length;) {
      a = null, h = 0, i = 0;
      do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32);
      n = 1 & i ? ~(i >> 1) : i >> 1, h = i = 0;
      do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32);
      o = 1 & i ? ~(i >> 1) : i >> 1, l += n, r += o, d.push([l / c, r / c])
    }
    return d = d.map(function (t) {
      return {
        latitude: t[0],
        longitude: t[1]
      }
    })
  }

  /**
   * After loading custome image of marker it will render map and refresh map will image
   */
  forceUpdateMap() {
    console.log("-----forceUpdateMap------")
    this.setState({ imageloaded: true });
  }

  /**
   * This method will fit all markers point into single screen 
   */
  fitAllMarkers() {
    const temMark = this.state.MARKERS;
    console.log( "------fitAllMarkers------")
    this.setState({loading:false});
    if (this.mapRef == null) {
      console.log("map is null")
    } else {
      //option:1  
      console.log("temMark : " + JSON.stringify(temMark));
      this.mapRef.fitToCoordinates(temMark, {
        edgePadding: DEFAULT_PADDING,
        animated: false,
      });              
    }
  }


  render() {

    return (
      <View style={styles.container}>
        {
          (this.state.coords != null) ?
            <MapView
              ref={ref => { this.mapRef = ref; }}
              style={styles.map}
              onLayout={() => this.fitAllMarkers()}>

              {/*used to drae line on rout point of locations*/}
              < MapView.Polyline
                coordinates={this.state.coords}
                strokeWidth={2}
              />

              {/*start point marker*/}
              <MapView.Marker
                key={1}
                coordinate={this.state.startMarker}
              />

              {/*end point marker*/}
              <MapView.Marker
                key={2}
                coordinate={this.state.destMarker}
              >                
              </MapView.Marker>
            </MapView> : null
        }
      </View>
    );
  }
}

const stylesEx = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});